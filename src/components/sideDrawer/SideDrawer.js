import React from 'react';
import styles from './SideDrawer.module.scss';
import { Link } from 'react-router-dom';

const SideDrawer = (props) => (
    <nav className={`${styles.side_drawer} ${props.visible ? styles.open : ""}`}>
        <ul>
            <li><a href="/"><h1 href="/">nico galin.</h1></a></li>
            <li><Link to='/' onClick={props.onClick}>home</Link></li>
            <li><Link to='/work' onClick={props.onClick}>work</Link></li>
            <li><Link to='/resume' onClick={props.onClick}>resume</Link></li>
            <li><Link to='/contact' onClick={props.onClick}>contact</Link></li>
        </ul>
    </nav>
);

export default SideDrawer;