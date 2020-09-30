import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './App.scss';

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
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler}/>
    }
    return (
      <Router>
        <div className="app">
          <header>
            <Navbar drawerToggleHandler={this.drawerToggleHandler}/>
            <SideDrawer visible={this.state.sideDrawerOpen} />
          </header>
          {backdrop}
          <Switch>
            <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL+'/work'} component={Work} />
            <Route exact path={process.env.PUBLIC_URL+'/resume'} component={Resume} />
            <Route exact path={process.env.PUBLIC_URL+'/contact'} component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
