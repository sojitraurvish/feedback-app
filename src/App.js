
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
import Post from "./component/Post";

function App(){
    

    return (
        <>
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm />
                            <FeedbackStates/>
                            <FeedbackList/>
                            <AboutIconLink/>
                        </>
                    }></Route>
                    
                    <Route path="/about" element={<AboutPage/>}/>
                    {/* <Route path="/post/:id/:name" element={<Post/>}/> */}
                    {/* <Route path="/post/:id/:name/*" element={<Post/>}/> */}

                </Routes>

                {/* <Card>
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </Card> */}
                
            </div>
        </>
    );
}

export default App;

