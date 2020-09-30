import React, {Component} from 'react';
import { Tile } from './components/tile/Tile';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
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
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler}/>
    }
    return (
      <div className="app">
        <header>
          <Navbar drawerToggleHandler={this.drawerToggleHandler}/>
          <SideDrawer visible={this.state.sideDrawerOpen} />
        </header>
        {backdrop}
        <div className="page_container">
          <h1 className="page_title">[site is still in progress] featured</h1>
          <div className="montage_container">
            <Tile 
              type = "image"
              image = "fox.png"
              underContent = "fox."
              externalUrl="https://www.instagram.com/p/CDUd-nnAW9C/"
            />
            <Tile 
              type = "image"
              image = "berry.png"
              underContent = "berry."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "heading"
              title = "<li>this website</li>"
              underContent = "ReactJS | GitHub | Redux | SCSS"
              externalUrl = "https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "gem.png"
              underContent = "gem."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "heading"
              title = "<li>sentiment analysis</li>"
              underContent = "TensorFlow | Python | ReactJS | CSS"
              externalUrl = "https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "range.png"
              underContent = "range."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "croissant.png"
              underContent = "croissant."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "pin.png"
              underContent = "pin."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "weight.png"
              underContent = "weight."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "heading"
              title = "<li>sentiment analysis</li>"
              underContent = "TensorFlow | Python | ReactJS | CSS"
              externalUrl = "https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "blaze.png"
              underContent = "blaze."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "aperture.png"
              underContent = "aperture."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "cubes.png"
              underContent = "cubes."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "target.png"
              underContent = "target."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "image"
              image = "screens.png"
              underContent = "screens."
              externalUrl="https://www.instagram.com/noir.graphics/"
            />
            <Tile 
              type = "content"
              image = "jobylogo.png"
              title = "Software Engineering Intern"
              subTitle = "Joby Aviation"
              description = "Random description here"
              underContent = "June 2018 - May 2020 (2yr)"
              externalUrl = "https://www.instagram.com/noir.graphics/"
            />
          </div>
        </div>
      </div>
    );
  }
}
