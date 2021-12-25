import propTypes from 'prop-types';
import TransactionsHead from './transactionsHead/TransactionsHead';
import TransactionsBody from './transactionsBody/TransactionsBody';

export default function Transactions({ items }) {
  return (
    <table class="transaction-history">
      <TransactionsHead />
      <TransactionsBody items={items} />
    </table>
  );
}

Transactions.propTypes = {
  items: propTypes.array,
};
