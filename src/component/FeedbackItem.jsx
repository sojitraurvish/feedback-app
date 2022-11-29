import { useState } from "react";

const FeedbackItem=()=>{
    const [rating,setRating]=useState(()=>7);    
    const [text,setText]=useState(()=>"This is an example of Feedback item.");
   
    const handleClick=()=>{
        // setRating(rating+1);
        // setRating(rating+1);
        setRating((prev)=>{
            return 1 + prev;
        });
        setRating((prev)=>{
            return 1 + prev;
        });
    }
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
            <div onClick={handleClick}>Click</div>
        </div>
    );
}

export default FeedbackItem