import PropTypes from 'prop-types';
import { TransactinHistory, HeadingColumn, TableString } from './TransactionHistory.styled';


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
            <TableString>{item.type}</TableString>
            <TableString>{item.amount}</TableString>
            <TableString>{item.currency}</TableString>
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