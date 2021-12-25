import propTypes from 'prop-types';
import StatItem from './statItem/Painting';
import { StatisticsList } from './StatList.styled';
const StatList = ({ stats }) => {
  return (
    <StatisticsList>
      {stats.map(stat => (
        <StatItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        ></StatItem>
      ))}
    </StatisticsList>
  );
};

StatList.propTypes = {
  stats: propTypes.array,
};
export default StatList;
