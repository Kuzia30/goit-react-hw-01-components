import PropTypes from 'prop-types';
import { StatisticsItem, Label } from './Painting.styled';
const StatItem = ({ label, percentage }) => {
  return (
    <StatisticsItem>
      <Label>{label}</Label>
      <span class="percentage">{percentage}%</span>
    </StatisticsItem>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatItem;
