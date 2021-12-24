import Profile from './components/profile/Profile';
import user from './user.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile items={user} />
    </Container>
  );
}
