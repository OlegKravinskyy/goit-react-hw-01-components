import { ProfileUsers } from './ProfileUsers/ProfileUsers';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { WrapperProfile } from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <WrapperProfile>
      <ProfileUsers user={user} />
      <ProfileStats user={user} />
    </WrapperProfile>
  );
};
