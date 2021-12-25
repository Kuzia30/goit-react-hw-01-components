import propTypes from 'prop-types';

import TransactionItem from './transactionItem/TransactionItem';

export default function TransactionsBody({ items }) {
  return (
    <tbody>
      {items.map(item => (
        <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  );
}

TransactionsBody.propTypes = {
  items: propTypes.array,
};
