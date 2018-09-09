const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const router = require('./router');

const server = express();
server.use(helmet());
server.use('/', express.static(path.join(__dirname, '../client/dist')));

server.use('/api', bodyParser.json());
server.use('/api', bodyParser.urlencoded({extended: true}));
server.use('/api', router);

server.listen(4000, () => console.log('server is listening on 4000'));