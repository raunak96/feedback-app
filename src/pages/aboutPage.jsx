import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>
					This is a react project where users can leave feedback about
					a service or a product.
				</p>
				<p>
					Version: <strong>1.0.0</strong>
				</p>
				<p>
					<Link to="/">Go To Home</Link>
				</p>
			</div>
		</Card>
	);
};

export default AboutPage;
