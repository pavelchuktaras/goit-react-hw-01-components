
import PropTypes from 'prop-types';
import css from 'components/transaktions//transactions.module.css';

 const TransactionHistory = ({ transactions }) => {
return(
  <table className={css.transactions}>
  <thead className={css.table}>
      <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
      </tr>
  </thead>

  <tbody>
       {transactions.map(({ type, amount, currency,id }) => (
<tr key={id}>
  <td>{type}</td>
  <td>{amount}</td>
  <td>{currency}</td>
</tr>
))}
  </tbody>
</table>
)
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionHistory;
