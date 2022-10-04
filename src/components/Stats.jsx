import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Stats = () => {
	const { feedback } = useContext(FeedbackContext);
	const average =
		feedback.reduce((tot, { rating }) => tot + rating, 0) / feedback.length;

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
		</div>
	);
};

export default Stats;
