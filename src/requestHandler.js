// programming task
// Request handler module
//
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>
//

'use strict';

exports.requestHandler = requestHandler;

const url = require('url');
const logic = require('./logic');

function collectRequestData(request, callback) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
    callback(body);
  });
}

function requestHandler(req, res) {
  const contentType = req.headers['content-type'];
  if (!/^application\/json/.test(contentType)) {
    res.writeHead(415, "Unsupported Media Type",
      {"Content-Type": "text/plain"});
    res.write(`Invalid content-type.
      Expected application/json but received ${contentType}\n`);
    res.end();
    return;
  }
  const urlObj = url.parse(req.url, true);
  const altMode = urlObj.query.test;
  collectRequestData(req, (body) => {
    try {
      const obj = JSON.parse(body);
      const processedData = logic.processGivenObject(obj, altMode);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(processedData)+"\n");
    }
    catch (err) {
      console.error(err);
      if (err instanceof SyntaxError) {
        res.writeHead(400, "Bad Request",
          {"Content-Type": "text/plain"});
        res.write("Requested JSON is incorrect\n");
      } else {
        res.writeHead(error.statusCode || 500, "Internal Server Error",
          {"Content-Type": "application/json"});
        res.write("Internal Server Error\n");
      }
    }
    finally {
      res.end();
    }
  });
}
