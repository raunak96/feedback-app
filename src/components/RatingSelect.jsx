import { forwardRef, useContext, useEffect, useId, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = forwardRef(({ reset }, ref) => {
	const [rating, setRating] = useState(10);
	const { selectedFeedback } = useContext(FeedbackContext);
	const id = useId();
	useEffect(() => {
		setRating(selectedFeedback.item?.rating ?? 10);
	}, [reset, selectedFeedback.item?.rating]);
	return (
		<ul className="rating">
			{[...Array(10)].map((_, i) => (
				<li key={`${id}-${i + 1}`}>
					<input
						type="radio"
						name="rating"
						id={`${id}-${i + 1}`}
						value={i + 1}
						checked={rating === i + 1}
						onChange={e => setRating(+e.target.value)}
						ref={rating === i + 1 ? ref : null}
					/>
					<label htmlFor={`${id}-${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
});

export default RatingSelect;
