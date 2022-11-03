import PropTypes from 'prop-types';
import { ProfileUsersWrapper } from './ProfileUsers.styled';
import { ProfileUsersImg } from './ProfileUsers.styled';
import { ProfileUsersItem } from './ProfileUsers.styled';
import { ProfileUsersName } from './ProfileUsers.styled';

export const ProfileUsers = ({ user: { username, tag, location, avatar } }) => {
  return (
    <ProfileUsersWrapper>
      <ProfileUsersImg src={avatar} alt={username} class="avatar" />
      <ProfileUsersName class="name">{username}</ProfileUsersName>
      <ProfileUsersItem class="tag">{tag}</ProfileUsersItem>
      <ProfileUsersItem class="location">{location}</ProfileUsersItem>
    </ProfileUsersWrapper>
  );
};

ProfileUsers.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
