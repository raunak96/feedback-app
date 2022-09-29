import PropTypes from "prop-types";

const Header = ({ text = "Feedback UX", bgColor, textColor }) => {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className="container">
				<h2>{text}</h2>
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
