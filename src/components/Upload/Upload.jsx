/* eslint-disable react/prop-types */
import React from 'react';
import './Task02.css';
import PropTypes from 'prop-types';

const Stats = ({ title, stats }) => (
  <section className="stats-section">
    <h2 className="title">{title}</h2>
    <ul className="stars-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  title: 'Upload stats',
};

Stats.propTypes = {
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string.isRequired,
};

export default Stats;
