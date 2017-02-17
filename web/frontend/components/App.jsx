import React from 'react';
import LiveView from './LiveView';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='DoC Scraper'/>
        <LiveView/>
      </div>
    )
  }
}
