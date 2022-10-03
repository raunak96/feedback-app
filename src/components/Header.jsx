import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ text = "Feedback UX", bgColor, textColor }) => {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className="container">
				<Link to="/" className="logo">
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	);
};
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};
Header.defaultProps = {
	bgColor: "rgba(0,0,0,0.4)",
	textColor: "#ff6a95",
};
export default Header;
