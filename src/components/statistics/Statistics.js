import propTypes from 'prop-types';
import Title from './title/Title';
import StatList from './statList/StatList';
import { StatisticsSection } from './Statistics.styled';

export default function Statistics({ stats }) {
  return (
    <StatisticsSection>
      <Title title="Upload stats" />
      <StatList stats={stats} />
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  stats: propTypes.array,
};
