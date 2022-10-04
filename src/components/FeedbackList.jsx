import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
	const { feedback, isLoading } = useContext(FeedbackContext);
	if (!isLoading && (!feedback || feedback.length === 0))
		return <p>No Feedbacks to Show</p>;

	return isLoading ? (
		<Spinner />
	) : (
		<div className="feedback-list">
			<AnimatePresence></AnimatePresence>
			{feedback.map(item => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					exit={{ opacity: 0 }}>
					<FeedbackItem key={item.id} item={item} />
				</motion.div>
			))}
		</div>
	);
};

export default FeedbackList;
