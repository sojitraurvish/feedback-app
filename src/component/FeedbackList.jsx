import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
const FeedbackList=({feedback})=>{ 
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className="feedback-list">
            {
                feedback.map((item)=>(
                    <FeedbackItem key={item._id} item={item}/>
                ))
            }
        </div>
    );
}

FeedbackList.propTypes={
    feedback:PropTypes.array.isRequired
    // feedback:PropTypes.arrayOf({
    //     id:PropTypes.number.isRequired,
    //     text:PropTypes.string.isRequired,
    //     rating:PropTypes.number.isRequired,
    // })
}

export default FeedbackList;