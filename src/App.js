import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<FeedbackForm />
									<Stats />
									<FeedbackList />
								</>
							}
						/>
						<Route path="about" element={<AboutPage />} />
					</Routes>
				</div>
				<AboutIconLink />
			</Router>
		</FeedbackProvider>
	);
};

export default App;
