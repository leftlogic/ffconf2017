// 3rd party includes
const express = require('express');

// our modules
require('./config'); // load first as it has our env
const hbs = require('./hbs');


const app = express();
const port = process.env.PORT || 9000;

// configure express' views
const render = hbs.express3({
  extname: '.html',
  defaultLayout: __dirname + '/../views/layout.html',
  partialsDir: [__dirname + '/../views/partials'],
});
app.engine('html', render);
app.engine('svg', render);
app.set('views', __dirname + '/../views');
app.set('view engine', 'html');

// change the powered-by (generally good for security anyway)
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.setHeader('x-powered-by', 'ffconf');
  next();
});

// mount static above any dynamic routes
app.use('/', express.static(__dirname + '/../public'));
app.get('/', (req, res) => res.render('index'));
app.get('/cfp', (req, res) => res.render('cfp'));
app.get('/code-of-conduct', (req, res) => res.render('code-of-conduct'));
app.get('/scholarship', (req, res) => res.render('scholarship'));

// this module is used in a larger package called `ffconf`: https://git.io/v9sov
if (module.parent) {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log(`🚀  http://localhost:${port}`);
  });
}

