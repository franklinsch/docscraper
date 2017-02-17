const express = require('express');
const app = express();
const path = require('path');

const WebSocketServer = require('websocket').server;

const config = {
  port: 3000
}

const server = app.listen(config.port, () => {
    const {address, port} = server.address();
    console.log(`The server is running at http://localhost:${port}/`);
});

const socket = new WebSocketServer({ httpServer : server });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'))
})

function _sendLiveView(connection) {
  connection.send(JSON.stringify({
    type: "liveview",
    content: [
      {
        name: "fs2014",
        latestProcess: "vim",
        latestComputer: "texel02",
        lastSeen: "2017-02-17"
      }
    ]
  }))
}

socket.on('request', (request) => {
  const connection = request.accept(null, request.origin);
  
  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      const messageData = JSON.parse(message.utf8Data);
      const messageContent = messageData.content;

      switch(messageData.type) {
        case "liveview_request":
          _sendLiveView(connection);
          break;
      }
    }
  })
})
