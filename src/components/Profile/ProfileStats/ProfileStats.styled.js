import styled from 'styled-components';

export const StatsWrapper = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const StatsItem = styled.li`
  padding: 10px 0;
  width: 100px;
  text-align: center;
  background-color: rgb(150, 350, 300);
  border: 1px solid rgb(250, 233, 240);
  font-size: 20px;
`;

export const StatsItemText = styled.span`
  color: blue;
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
`;
