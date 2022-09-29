import PropTypes from "prop-types";

const Card = ({ children, dark }) => {
	return <div className={`card ${dark ? "dark" : ""}`}>{children}</div>;
};
Card.defaultProps = {
	dark: false,
};
Card.propTypes = {
	children: PropTypes.node.isRequired,
	dark: PropTypes.bool.isRequired,
};
export default Card;
