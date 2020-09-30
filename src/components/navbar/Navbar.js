import React from 'react';
import styles from './Navbar.module.scss';
import DrawerToggle from '../sideDrawer/DrawerToggle'

const Toolbar = (props) => {
  return (
    <header className={styles.toolbar}>
      <nav className={styles.toolbar_nav}>
        <div><DrawerToggle onClick={props.drawerToggleHandler}/></div>
        <div className={styles.toolbar_heading}>
          <a href="/">
            <h1>nico galin.</h1>
            <h5>code | design</h5>
          </a>
        </div>
        <div className={styles.toolbar_nav_items}>
          <ul>
            <li><a href={process.env.PUBLIC_URL+'/'}>home</a></li>
            <li><a href={process.env.PUBLIC_URL+'/work'}>work</a></li>
            <li><a href={process.env.PUBLIC_URL+'/resume'}>resume</a></li>
            <li><a href={process.env.PUBLIC_URL+'/contact'}>contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
