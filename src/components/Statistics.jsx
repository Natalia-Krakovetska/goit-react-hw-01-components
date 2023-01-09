import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
  {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
  {stats.map(item => (
    <li className="item" key = {item.id}>
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </li>
  )).join('')}
  </ul>
</section>
)
};

Statistics.propTypes = {
    title: PropTypes.string,
 
    stats: PropTypes.arrayOf(PropTypes.shape({
        key:  PropTypes.string.isRequired, 
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
    }

 