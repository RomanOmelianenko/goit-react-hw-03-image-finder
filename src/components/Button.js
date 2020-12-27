import React from 'react';
import styles from './styles.module.css';

function Button({ onClick }) {
    return (
        <button
            type="button"
            className={styles.Button}
            onClick={onClick}
        >
            Load more
        </button>
    );
};

export default Button;