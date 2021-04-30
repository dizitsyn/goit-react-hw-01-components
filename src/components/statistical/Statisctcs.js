import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statisctcs = ({ data, title = 'статистика' }) => (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={styles.statList}>
      {data.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statisctcs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statisctcs;
