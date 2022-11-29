import React from "react";
import Header from "./component/Header";
import FeedbackItem from "./component/FeedbackItem";

function App(){
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackItem/>
            </div>
        </>
    );
}

export default App;

