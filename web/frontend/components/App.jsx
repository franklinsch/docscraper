import React from 'react';
import LiveView from './LiveView.jsx';
import NavigationBar from './NavigationBar.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      liveViewValues: []
    }

    const host = window.location.hostname;

    const socket = new WebSocket('ws://' + host + ':3000');

    socket.onopen = (event) => {
      socket.send(JSON.stringify({ 
        type: "liveview_request"
      }))
    }

    socket.onerror = (error) => { console.error("WebSocket error: " + error) }
    socket.onclose = (event) => { console.log("Disconnected from WebSocket") }
    socket.onmessage = (message) => { this.route(message) }
  }

  route(message) {
    const messageData = JSON.parse(message.data); 

    if (messageData.type === "liveview") {
      this.setState({
        liveViewValues: messageData.content
      })
    }
  }

  render() {
    const liveViewValues = this.state.liveViewValues;

    return (
      <div>
        <NavigationBar/>

        <LiveView
          values = {liveViewValues} 
        />
      </div>
    )
  }
}
