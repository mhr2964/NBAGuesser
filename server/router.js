const controllers = require('./controllers');

const router = (app) => {
  app.get('/', controllers.index);

  app.get('/playerRandom', controllers.NBA.getRandomPlayer);
  app.get('/player', controllers.NBA.getPlayerId);
  app.get('/playerProfile', controllers.NBA.getPlayerProfile);
  app.get('/playerInfo', controllers.NBA.getPlayerInfo);
  app.get('/playerStats', controllers.NBA.getPlayerStats);
  app.get('/playerSplits', controllers.NBA.getPlayerSplits);
  app.get('/playerShooting', controllers.NBA.getPlayerShooting);
  app.get('/playerClutch', controllers.NBA.getPlayerClutch);

  app.get('/*', controllers.notFound);
};

module.exports = router;
