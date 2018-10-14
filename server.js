const express = require('express')
//const http = require('http');
const app = express();

//const port = process.env.PORT || 4000;

//const server = http.createServer(app);

app.use(express.static('public'))

//server.listen(port);

app.listen(process.env.PORT || 4000);