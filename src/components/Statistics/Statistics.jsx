import PropTypes from 'prop-types';
import { StatisticsWrapper, StatisticsList, StatisticsItem, StatisticsTitle } from './Statistics.styled';
export default function Statistics ({ title, stats }) {
  return (
    <StatisticsWrapper>
  {title && <StatisticsTitle>{title}</StatisticsTitle>}

  <StatisticsList>
    {stats.map((stat => 
 <StatisticsItem key={stat.id}>
 <span className="label">{stat.label}</span>
 <span className="percentage">{stat.percentage}</span>
</StatisticsItem>
      ))}
   
  </StatisticsList>
</StatisticsWrapper>
)
};

Statistics.propTypes = {
    title: PropTypes.string,
 
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:  PropTypes.string.isRequired, 
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
    }

 