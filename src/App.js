import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Stats from "./components/Stats";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const deleteFeedback = id => {
		if (window.confirm("Are you sure you want to delete?"))
			setFeedback(prev => prev.filter(item => item.id !== id));
	};
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback(prev => [newFeedback, ...prev]);
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<Stats feedback={feedback} />
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	);
};

export default App;
