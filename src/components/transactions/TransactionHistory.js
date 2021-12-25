import propTypes from 'prop-types';
import TransactionsHead from './transactionsHead/TransactionsHead';
import TransactionsBody from './transactionsBody/TransactionsBody';
import { Table } from './TransactionHistory.styled';

export default function Transactions({ items }) {
  return (
    <Table>
      <TransactionsHead />
      <TransactionsBody items={items} />
    </Table>
  );
}

Transactions.propTypes = {
  items: propTypes.array,
};
