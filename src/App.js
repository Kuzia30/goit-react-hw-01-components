import Profile from './components/profile/Profile';
import user from './user.json';
export default function App() {
  return <Profile items={user} />;
}
