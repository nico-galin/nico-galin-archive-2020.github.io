import React from 'react';
import styles from './SideDrawer.module.scss';

const SideDrawer = (props) => (
    <nav className={`${styles.side_drawer} ${props.visible ? styles.open : ""}`}>
        <ul>
            <li><a href="/"><h1 href="/">nico galin.</h1></a></li>
            <li><a href="/">home</a></li>
            <li><a href="/">work</a></li>
            <li><a href="/">resume</a></li>
            <li><a href="/">contact</a></li>
        </ul>
    </nav>
);

export default SideDrawer;