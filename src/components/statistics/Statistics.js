import Title from './title/Title';
import StatList from './statList/StatList';

export default function Statistics({ stats }) {
  return (
    <section class="statistics">
      <Title title="Upload stats" />
      <StatList stats={stats} />
    </section>
  );
}
