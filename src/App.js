import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Stats from "./components/Stats";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<Stats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					/>
					<Route path="about" element={<AboutPage />} />
				</Routes>
			</div>
			<AboutIconLink />
		</Router>
	);
};

export default App;
