'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/index.js');

app.use('/api', routers.api);

app.listen(3000, serverLogInit);

function serverLogInit() {
  console.log('> localhost:3000');
}

module.exports = app;

