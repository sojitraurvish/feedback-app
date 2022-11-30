import {v4 as uuidv4} from "uuid";
import { createContext,useEffect,useState } from "react";

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [feedback,setFeedback]=useState([])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    });

    useEffect(()=>{
     
        fetchFeedback();
    },[])

    // Fetch feedback
    const fetchFeedback=async ()=>{
        const res=await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data=await res.json();

        setFeedback(data);
        setIsLoading(false);
    }

    // Add feedback
    const addFeedback=async (newFeedBack)=>{
        const res=await fetch("http://localhost:5000/feedback",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newFeedBack)
        })
        const data=await res.json()
        setFeedback([data,...feedback]);
    }

    // Delete feedback
    const deleteFeedback=async (id)=>{
        await fetch(`http://localhost:5000/feedback/${id}`,{
            method:"DELETE",
            
        })

        // console.log("App",id);
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    // Set item to be updated   
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    // Update feedback item
    const updateFeedback=async(id,updItem)=>{
        const res=await fetch(`http://localhost:5000/feedback/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updItem)
        })

        const data=await res.json();

        setFeedback(feedback.map((item)=>(
            item.id===id ? {...item,...data} : item
        )))
        // setFeedbackEdit(null)
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback,
        feedbackEdit,
        setFeedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;