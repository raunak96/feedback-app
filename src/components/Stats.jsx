import PropTypes from "prop-types";

const Stats = ({ feedback }) => {
	const average =
		feedback.reduce((tot, { rating }) => tot + rating, 0) / feedback.length;

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
		</div>
	);
};
Stats.propTypes = {
	feedback: PropTypes.array.isRequired,
};
export default Stats;
