import styled from 'styled-components';

export const StatsWrapper = styled.section`
  margin: 0 auto 30px;
  width: 400px;
`;

export const StatsHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0;
  color: blue;
  background-color: #ded7d7;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: aqua;
  border: solid 1px green;
  font-size: 20px;
`;

export const StatsText = styled.li`
  padding-bottom: 10px;
`;
