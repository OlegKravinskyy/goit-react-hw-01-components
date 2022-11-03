import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.table`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  border: solid 1px;
`;

export const TransactionHistoryThead = styled.thead`
  background-color: aqua;
  font-size: 20px;
`;

export const TransactionHistoryBody = styled.tbody``;

export const TransactionHistoryRow = styled.tr`
  :nth-child(2n) {
    background-color: #ded7d7;
  }
`;

export const TransactionHistoryItem = styled.th`
  padding: 10px;
`;

export const TransactionHistoryLine = styled.td`
  padding: 10px;
  font-size: 16px;
`;

// export
