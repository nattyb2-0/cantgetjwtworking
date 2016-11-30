const userRouter = require('express').Router();

userRouter.route('/login')
  .get((req, res) => res.send('hi'))

module.exports = userRouter;
