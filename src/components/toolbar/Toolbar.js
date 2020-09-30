import React from 'react';
import styles from './Toolbar.module.scss';
import DrawerToggle from '../sideDrawer/DrawerToggle'
import Icon from '@material-ui/core/Icon';

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
            <li><a href="/">home</a></li>
            <li><a href="/">work</a></li>
            <li><a href="/">resume</a></li>
            <li><a href="/">contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
