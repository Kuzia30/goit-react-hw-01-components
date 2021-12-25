import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendsList from './components/friends/FriendsList';
import Transactions from './components/transactions/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile items={user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </Container>
  );
}
