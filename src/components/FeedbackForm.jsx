import { useContext, useEffect, useRef, useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
	const textRef = useRef();
	const ratingRef = useRef();
	const [message, setMessage] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	const [reset, setReset] = useState(0);

	const { addFeedback, selectedFeedback, updateFeedback } =
		useContext(FeedbackContext);
	useEffect(() => {
		if (selectedFeedback.edit) {
			textRef.current.value = selectedFeedback.item.text;
			setIsDisabled(false);
			setMessage("");
		}
	}, [
		selectedFeedback.item?.id,
		selectedFeedback.item?.text,
		selectedFeedback.edit,
	]);

	const handleSubmit = e => {
		e.preventDefault();
		if (isDisabled) return;
		const newFeedback = {
			text: textRef.current.value,
			rating: +ratingRef.current.value,
		};
		if (selectedFeedback.edit)
			updateFeedback(selectedFeedback.item.id, newFeedback);
		else addFeedback(newFeedback);
		e.target.reset();
		setReset(prev => prev ^ 1);
		setIsDisabled(true);
		setMessage("");
	};
	const handleChange = () => {
		if (textRef.current?.value === "") {
			setIsDisabled(true);
			setMessage("");
		} else if (textRef.current?.value?.trim()?.length >= 10) {
			setIsDisabled(false);
			setMessage("");
		} else {
			setIsDisabled(true);
			setMessage("Text must be at least 10 characters long");
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would u rate your experience with us?</h2>
				<RatingSelect ref={ratingRef} reset={reset} />
				<div className="input-group">
					<input
						ref={textRef}
						type="text"
						placeholder="Leave a review"
						onChange={handleChange}
					/>
					<Button type="submit" isDisabled={isDisabled}>
						Submit
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
