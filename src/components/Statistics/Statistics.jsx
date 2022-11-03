import PropTypes from 'prop-types';
import { StatsWrapper } from './Statistics.style';
import { StatsHeader } from './Statistics.style';
import { StatsList } from './Statistics.style';
import { StatsItem } from './Statistics.style';
import { StatsText } from './Statistics.style';

export const Statistics = ({ data }) => {
  return (
    <StatsWrapper>
      <StatsHeader>Upload stats</StatsHeader>

      <StatsList>
        {data.map(({ id, label, percentage }) => {
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
