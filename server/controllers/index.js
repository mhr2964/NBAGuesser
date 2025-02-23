const index = require('./main.js').hostMain;
const NBA = require('./nbaAPI.js');

const notFound = (req, res) => {
  res.render('notFound');
};

module.exports = {
  index,
  NBA,
  notFound,
};