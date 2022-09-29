import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
	return !feedback || feedback.length === 0 ? (
		<p>No Feedbacks to Show</p>
	) : (
		<div className="feedback-list">
			{feedback.map(item => (
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};
FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
	handleDelete: PropTypes.func.isRequired,
};
export default FeedbackList;
