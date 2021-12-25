import PropTypes from 'prop-types';
import { StatisticsItem, Label, Percentage } from './Painting.styled';
const StatItem = ({ label, percentage }) => {
  return (
    <StatisticsItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsItem>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatItem;
