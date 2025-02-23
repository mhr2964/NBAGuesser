const index = require('./main.js').main;
const NBA = require('./nbaAPI.js');

const notFound = (req, res) => {
  res.render('notFound');
};

module.exports = {
  index,
  NBA,
  notFound,
};
