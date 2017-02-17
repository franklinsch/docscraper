const express = require('express');
const app = express();
const path = require('path');

const config = {
  port: 3000
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'))
})

app.listen(config.port, function () {
    console.log('Server started')
})
