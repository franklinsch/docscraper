import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

export default class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar brand='DoC Scraper' right>
        <NavItem href='leaderboard.html'>Leaderboard</NavItem>
      </Navbar>
    )
  }

}
