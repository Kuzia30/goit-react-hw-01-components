import propTypes from 'prop-types';

import TransactionItem from './transactionItem/TransactionItem';
import { TBody } from './TransactionsBody.styled';

export default function TransactionsBody({ items }) {
  return (
    <TBody>
      {items.map(item => (
        <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </TBody>
  );
}

TransactionsBody.propTypes = {
  items: propTypes.array,
};
