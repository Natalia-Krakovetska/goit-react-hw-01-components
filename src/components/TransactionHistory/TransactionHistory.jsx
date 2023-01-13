import PropTypes from 'prop-types';
import { TransactinHistory, HeadingColumn } from './TransactionHistory.styled';


export default function TransactionHistory({ items }){
    return (
        <TransactinHistory>
        <thead>
          <tr>
            <HeadingColumn>Type</HeadingColumn>
            <HeadingColumn>Amount</HeadingColumn>
            <HeadingColumn>Currency</HeadingColumn>
          </tr>
        </thead>
      
        <tbody>
          {items.map(item => 
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
              )
            }      
        </tbody>
      </TransactinHistory>
    )
};
TransactionHistory.propTypes= {
    item: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}