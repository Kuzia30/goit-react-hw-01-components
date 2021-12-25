import propTypes from 'prop-types';
import { TRow, Items } from './TransactionItem.styled';

export default function TransactionItem({ currency, amount, type }) {
  return (
    <TRow>
      <Items>{type}</Items>
      <Items>{amount}</Items>
      <Items>{currency}</Items>
    </TRow>
  );
}

TransactionItem.propTypes = {
  currency: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
