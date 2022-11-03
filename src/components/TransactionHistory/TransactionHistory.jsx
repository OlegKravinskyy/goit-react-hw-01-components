import PropTypes from 'prop-types';
import { TransactionHistoryWrapper } from './TransactionHistory.styled';
import { TransactionHistoryThead } from './TransactionHistory.styled';
import { TransactionHistoryBody } from './TransactionHistory.styled';
import { TransactionHistoryRow } from './TransactionHistory.styled';
import { TransactionHistoryItem } from './TransactionHistory.styled';
import { TransactionHistoryLine } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryThead>
        <TransactionHistoryRow>
          <TransactionHistoryItem>Type</TransactionHistoryItem>
          <TransactionHistoryItem>Amount</TransactionHistoryItem>
          <TransactionHistoryItem>Currency</TransactionHistoryItem>
        </TransactionHistoryRow>
      </TransactionHistoryThead>

      <TransactionHistoryBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow key={id}>
            <TransactionHistoryLine>{type}</TransactionHistoryLine>
            <TransactionHistoryLine>{amount}</TransactionHistoryLine>
            <TransactionHistoryLine>{currency}</TransactionHistoryLine>
          </TransactionHistoryRow>
        ))}
      </TransactionHistoryBody>
    </TransactionHistoryWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
