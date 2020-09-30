import React, {Component} from 'react';
import logo from './logo.svg';
import { Tile } from './components/tile/Tile';
import Toolbar from './components/toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import './App.scss';
import { BackupOutlined } from '@material-ui/icons';

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        <header className="App-header">
          <Toolbar drawerToggleHandler={this.drawerToggleHandler}/>
          <SideDrawer visible={this.state.sideDrawerOpen} />
          {backdrop}
          <img src={logo} className="App-logo" alt="logo" />
          <a>[Site in Progress]</a>
          <Tile title="graphic design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." externalUrl="https://www.instagram.com/noir.graphics/"/>
        </header>
      </div>
    );
  }
}
