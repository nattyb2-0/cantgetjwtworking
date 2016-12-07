const apiRouter = require('express').Router();

apiRouter.route('/')
  .get((req, res, next) => res.json({message: 'secrets go here'}));

module.exports = apiRouter;
