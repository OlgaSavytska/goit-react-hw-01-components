import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ el }) => {
    const { label, icon, capacity, description, price } = el;
    return (
        <li className={styles.pricingItem}>
            <img src={icon} className={styles.icon} alt="" />
            <h2 className={styles.label}>
                {label}
            </h2>
            <p className={styles.capacity}>{capacity}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}/MO</p>
            <button type="button" className={styles.button}
            > Get Started</button>
        </li>
    );
};

PricingItem.propTypes = {
    el: PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default PricingItem;



// const PricingItem = ({ items }) => (
//     items.map(item => (
//         <div className="pricing-item">

//             <i className="icon">{item.icon}</i>
//             <h2 className="label">{item.label}</h2>
//             <p className="capacity">{item.capacity} Storage</p>
//             <p className="description">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo
//                 quidem iste! Neque, tempore provident? Minus deleniti quia aspernatur, dolor
//                 id enim eos nostrum repellendus quas provident minima ad blanditiis!
//   </p>
//             <p className="price">{item.price}/MO</p>
//             <button className="button">Get Started</button>
//         </div>
//     ))
// )
