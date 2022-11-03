import styled from 'styled-components';

const colorStatus = props => {
  if (props.children) {
    return 'green';
  }
  return 'red';
};

export const FriendItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 5px;
  padding-left: 15px;
  background-color: #ded7d7;
`;

export const FreindItemAvatar = styled.img`
  width: 48px;
  margin-right: 30px;
`;

export const FriendItemStatus = styled.span`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  background-color: ${colorStatus};
`;

export const FriendItemName = styled.span`
  font-size: 20px;
  color: blue;
`;
