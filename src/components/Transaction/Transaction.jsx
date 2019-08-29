import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transactionhistory = ({ items }) => {
    return (
        <table className={styles.transactionhistory}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Type</th>
                    <th className={styles.th}>Amount</th>
                    <th className={styles.th}>Currency</th>
                </tr>
            </thead>
            {items.map(item => (
                <tbody key={item.id}>
                    <tr className={styles.tr}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};

Transactionhistory.defaultProps = {
    items: '',
};

Transactionhistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

export default Transactionhistory;