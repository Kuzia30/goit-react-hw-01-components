import propTypes from 'prop-types';
import StatItem from './statItem/Painting';

const StatList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(stat => (
        <StatItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        ></StatItem>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: propTypes.array,
};
export default StatList;
