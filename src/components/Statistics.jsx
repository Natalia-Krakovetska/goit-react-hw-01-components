import PropTypes from 'prop-types';

export default function Statistics ({ title, stats: { id, label, percentage } }) {
  return (
    <section class="statistics">
  {title && <h2 class="title">{title}</h2>}

  <ul class="stat-list">
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
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

 