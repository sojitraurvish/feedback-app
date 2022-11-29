import PropTypes from "prop-types"

const FeedbackStates=({feedback})=>{
    // Calculate rating avg;
    let average=feedback.reduce((acc,cur)=>{
        return acc + cur.rating ;
    },0) / feedback.length;

    average=average.toFixed(1).replace(/[.,]0$/,"")

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating:{isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

FeedbackStates.propTypes={
    feedback:PropTypes.array.isRequired
}

export default FeedbackStates