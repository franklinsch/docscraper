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
