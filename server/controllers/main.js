const main = (req, res) => {
  res.render('index', {
    layout: 'index',
  });
};

module.exports = {
  main,
};
