import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import LiveView from './LiveView.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='DoC Scraper' right>
        </Navbar>

        <LiveView/>
      </div>
    )
  }
}
