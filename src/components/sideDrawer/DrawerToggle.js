import React from 'react';
import styles from './DrawerToggle.module.scss';

const DrawerToggle = (props) => (
    <button className={styles.toggle_button} onClick={props.onClick}>
        <div className={styles.toggle_button_line} />
        <div className={styles.toggle_button_line} />
        <div className={styles.toggle_button_line} />
    </button>
);

export default DrawerToggle;