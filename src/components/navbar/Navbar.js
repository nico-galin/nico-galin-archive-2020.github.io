import React from 'react';
import styles from './Navbar.module.scss';
import DrawerToggle from '../sideDrawer/DrawerToggle';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
  return (
    <header className={styles.toolbar}>
      <nav className={styles.toolbar_nav}>
        <div><DrawerToggle onClick={props.drawerToggleHandler}/></div>
        <div className={styles.toolbar_heading}>
          <a href="/">
            <h1>nico galin.</h1>
            <h5>code | design (beta)</h5>
          </a>
        </div>
        <div className={styles.toolbar_nav_items}>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/work'>work</Link></li>
            <li><Link to='/resume'>resume</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
