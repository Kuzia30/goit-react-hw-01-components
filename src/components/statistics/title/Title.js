import PropTypes from 'prop-types';
import { Article } from './Title.styled';
const Title = ({ title }) => {
  return title && <Article>{title}</Article>;
};

Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
