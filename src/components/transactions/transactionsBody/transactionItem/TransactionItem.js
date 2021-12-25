import propTypes from 'prop-types';

export default function TransactionItem({ currency, amount, type }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  currency: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
