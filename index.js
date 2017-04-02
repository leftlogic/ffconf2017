const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('x-powered-by', 'ffconf');
  next();
});
app.use(express.static(__dirname, + '/public'));

if (module.parent) {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log(`Express server listening on http://localhost:${port}`);
  });
}

