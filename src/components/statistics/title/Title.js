import PropTypes from 'prop-types';
const Title = ({ title }) => {
  return title && <h2>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
