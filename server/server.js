"use strict"; // eslint-disable-line
const express = require('express');
const app = express();
const server = require('http').Server(app); // eslint-disable-line
const port = process.env.PORT || 3000;
const path = require('path');
const imperio = require('./../../imperio/index.js')(server);

/* ----------------------------------
 * -----   Global Middleware   ------
 * ---------------------------------- */

app.use(express.static(path.join(`${__dirname}/../../imperio`)));
app.use(express.static(path.join(`${__dirname}/../client`)));

/* ----------------------------------
 * --------      Routes      --------
 * ---------------------------------- */

 // App will serve up different pages for client & desktop
app.get('/', imperio.init(),
  (req, res) => {
    if (req.imperio.isDesktop) {
      res.render('./../client/index.html');
    } else {
      res.render('./../client/index.html');
    }
  }
);
// 404 error on invalid endpoint
app.get('*', (req, res) => {
  res.status(404)
     .render('./../client/404.html');
});

/* ----------------------------------
 * --------      Server      --------
 * ---------------------------------- */

server.listen(port, () => {
  console.log(`Listening on port ${port}`); // eslint-disable-line
});
