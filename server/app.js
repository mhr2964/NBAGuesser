const path = require('path');
const express = require('express');
const compression = require('compression');
const expressHandlebars = require('express-handlebars');
// const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 5000;

const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../public/`)));
// app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));

app.use(compression());
app.engine('handlebars', expressHandlebars.engine({
  defaultLayout: '',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);
router(app);
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});
