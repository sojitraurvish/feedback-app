import {v4 as uuidv4} from "uuid";
import {Routes,Route,NavLink} from "react-router-dom"; 

import { useState } from "react";

import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStates from "./component/FeedbackStates";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import Card from "./component/shared/Card";

function App(){
    const [feedback,setFeedback]=useState(FeedbackData);
    
    const deleteFeedback=(id)=>{
        // console.log("App",id);
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const addFeedback=(newFeedBack)=>{
        newFeedBack.id=uuidv4();
        setFeedback([newFeedBack,...feedback]);
    }

    return (
        <>
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStates feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                            <AboutIconLink/>
                        </>
                    }></Route>
                    
                    <Route path="/about" element={<AboutPage/>}/>

                </Routes>

                <Card>
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </Card>
                
            </div>
        </>
    );
}

export default App;

