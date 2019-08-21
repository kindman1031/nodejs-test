const express = require('express'),
  app = express()
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = process.env.PORT || 5000,
  api = require("./api");

app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);

app.listen(port);

console.log('API server started on: ' + port);