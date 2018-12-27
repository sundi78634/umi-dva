/**
 * @author Sun
 * @description express server
 */

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const proxy = require('express-http-proxy');
const path = require('path');
const urljoin = require('url-join');
const querystring = require('querystring');

const config = require('./config');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use(cookieParser());
app.use(express.static('dist'));

app.set('port', process.env.PORT || config.PORT);

app.use('*', proxy(config.httpUrl, {
  proxyReqPathResolver: function (req) {
    const path = req.params[0].split('/').reverse();
    return urljoin(config.httpUrl, `${path[0]}`);
  },
  proxyReqBodyDecorator: function (bodyContent, srcReq) {
    return bodyContent;
  },
  // preserveHostHdr: true,
  filter: function (req, res) {
    return req.method === 'GET';
  }
}));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve('dist/index.html'));
});

app.listen(app.get('port'), () => {
  console.log('server running http://localhost:' + app.get('port'));
});
