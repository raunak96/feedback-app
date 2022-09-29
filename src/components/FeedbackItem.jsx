import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item: { rating, text, id }, handleDelete }) => {
	return (
		<Card>
			<div className="num-display">{rating}</div>
			<button onClick={() => handleDelete(id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{text}</div>
		</Card>
	);
};
FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default FeedbackItem;
