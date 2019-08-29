import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => {
    return (
        <ul className={styles.pricingPlan}>
            {items.map(item => (
                <PricingItem key={item.price} el={item} />
            ))}
        </ul>
    );
};

PricingPlan.defaultProps = {
    items: '',
};

PricingPlan.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            capacity: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,

        }).isRequired,
    ),
};

export default PricingPlan;
// const PricingPlan = () => (
//     <li className="item">
//         <PricingItem />
//     </li>
// )

