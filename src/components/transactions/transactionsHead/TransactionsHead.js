import { Thead, Items } from './TransactionsHead.styled';
export default function TransactionsHead() {
  return (
    <Thead>
      <tr>
        <Items>Type</Items>
        <Items>Amount</Items>
        <Items>Currency</Items>
      </tr>
    </Thead>
  );
}
