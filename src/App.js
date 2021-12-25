import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import user from './user.json';
import data from './data.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile items={user} />
      <Statistics stats={data} />
    </Container>
  );
}
