import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchFeedback = async () => {
			const res = await fetch(`/feedback?_sort=id&_order=desc`);
			const data = await res.json();
			setFeedback(data);
			setIsLoading(false);
		};
		fetchFeedback();
	}, []);
	const [selectedFeedback, setSelectedFeedback] = useState({
		item: {},
		edit: false,
	});
	const addFeedback = async newFeedback => {
		const res = await fetch(`/feedback`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newFeedback),
		});
		const createdFeedback = await res.json();
		setFeedback(prev => [createdFeedback, ...prev]);
	};
	const deleteFeedback = async id => {
		if (window.confirm("Are you sure you want to delete?")) {
			await fetch(`/feedback/${id}`, {
				method: "DELETE",
			});
			setFeedback(prev => prev.filter(item => item.id !== id));
		}
	};
	const editFeedback = item => setSelectedFeedback({ item, edit: true });

	const updateFeedback = async (id, updItem) => {
		const res = await fetch(`/feedback/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updItem),
		});
		const updatedItem = await res.json();
		setFeedback(prev =>
			prev.map(item =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);
		setSelectedFeedback({ item: {}, edit: false });
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				selectedFeedback,
				isLoading,
				addFeedback,
				deleteFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
