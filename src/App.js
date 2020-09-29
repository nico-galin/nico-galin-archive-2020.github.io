import React from 'react';
import logo from './logo.svg';
import { Tile } from './components/tile/Tile';
import { SkewedHeader } from './components/skewedHeader/Skewedheader';
import './App.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <SkewedHeader title={"nico galin."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={logo} className="App-logo" alt="logo" />
      <a>[Site in Progress]</a>
      <Tile title="graphic design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." externalUrl="https://www.instagram.com/noir.graphics/"/>
    </header>
  </div>
);

export default App;
