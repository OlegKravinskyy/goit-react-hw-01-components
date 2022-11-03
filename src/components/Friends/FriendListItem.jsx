import PropTypes from 'prop-types';
import { FriendItemWrapper } from './FriendsListItem.styled';
import { FreindItemAvatar } from './FriendsListItem.styled';
import { FriendItemStatus } from './FriendsListItem.styled';
import { FriendItemName } from './FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemWrapper>
      <FriendItemStatus>{isOnline}</FriendItemStatus>
      <FreindItemAvatar src={avatar} alt="User avatar" width="48" />
      <FriendItemName>{name}</FriendItemName>
    </FriendItemWrapper>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
