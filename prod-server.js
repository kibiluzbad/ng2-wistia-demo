const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();
const root = __dirname + '/dist/.';
const port = process.env.PORT || 3001;

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(port, function () {
  console.log('Server started on ' + port);
});