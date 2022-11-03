import PropTypes from 'prop-types';
import { StatsWrapper } from './ProfileStats.styled';
import { StatsItem } from './ProfileStats.styled';
import { StatsItemText } from './ProfileStats.styled';

export const ProfileStats = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <StatsWrapper>
      <StatsItem>
        <StatsItemText>Followers</StatsItemText>
        <spaStatsItemText>{followers}</spaStatsItemText>
      </StatsItem>
      <StatsItem>
        <StatsItemText>Views</StatsItemText>
        <spaStatsItemText>{views}</spaStatsItemText>
      </StatsItem>
      <StatsItem>
        <StatsItemText>Likes</StatsItemText>
        <spaStatsItemText>{likes}</spaStatsItemText>
      </StatsItem>
    </StatsWrapper>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
