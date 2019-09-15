// WS parser
// Index file
//
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>
//

'use strict';

const server = require("./server");

global.port = process.argv[2];

server.start();
