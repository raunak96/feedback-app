import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Stats from "./components/Stats";
import FeedbackData from "./data/FeedbackData";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const deleteFeedback = id => {
		if (window.confirm("Are you sure you want to delete?"))
			setFeedback(prev => prev.filter(item => item.id !== id));
	};
	return (
		<>
			<Header />
			<div className="container">
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
