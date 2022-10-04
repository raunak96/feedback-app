import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [selectedFeedback, setSelectedFeedback] = useState({
		item: {},
		edit: false,
	});
	const deleteFeedback = id => {
		if (window.confirm("Are you sure you want to delete?"))
			setFeedback(prev => prev.filter(item => item.id !== id));
	};
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback(prev => [newFeedback, ...prev]);
	};
	const editFeedback = item => setSelectedFeedback({ item, edit: true });
	const updateFeedback = (id, updItem) => {
		setFeedback(prev =>
			prev.map(item => (item.id === id ? { ...item, ...updItem } : item))
		);
		setSelectedFeedback({ item: {}, edit: false });
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				addFeedback,
				deleteFeedback,
				selectedFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
