// programming task
// Server startup module
//
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>
//

'use strict';

exports.start = start;

const http = require('http');
const requestHandler = require('./requestHandler');

function start() {
  const port = global.port || process.env.PORT || 80;
  const server = http.createServer();

  server.on('request', (req, res) => {
    requestHandler.requestHandler(req, res);
  });

  server.listen(port, err => err ?
    console.log("something bad happened", err) :
    console.log(`server is listening on ${port}`)
  );

}
