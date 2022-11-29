import {v4 as uuidv4} from "uuid";
import { createContext,useState } from "react";

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:"This id feedback item 1",
            rating:10
        },
        {
            id:2,
            text:"This id feedback item 2",
            rating:5
        },
        {
            id:3,
            text:"This id feedback item 3",
            rating:8
        },
    ])
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    });

    // Add feedback
    const addFeedback=(newFeedBack)=>{
        newFeedBack.id=uuidv4();
        setFeedback([newFeedBack,...feedback]);
    }

    // Delete feedback
    const deleteFeedback=(id)=>{
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
    const updateFeedback=(id,updItem)=>{
        setFeedback(feedback.map((item)=>(
            item.id===id ? {...item,...updItem} : item
        )))
        // setFeedbackEdit(null)
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
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