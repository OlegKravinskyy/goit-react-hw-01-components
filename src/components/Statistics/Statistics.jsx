import PropTypes from 'prop-types';
import { StatsWrapper } from './Statistics.style';
import { StatsHeader } from './Statistics.style';
import { StatsList } from './Statistics.style';
import { StatsItem } from './Statistics.style';
import { StatsText } from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
      {title && <StatsHeader>Upload stats</StatsHeader>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <StatsText>{label}</StatsText>
              <StatsText>{percentage}%</StatsText>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsWrapper>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
