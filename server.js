'use strict'
require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const bcrypt      = require('bcryptjs');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;
var secret = process.env.SECRET
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressJWT({secret}).unless({path: ['/favicon.ico', '/user/login', '/user/signup']}));

const userRouter = require('./routes/user.js');
const apiRouter = require('./routes/api.js');
app.use('/user', userRouter);
app.use('/api', apiRouter);


app.listen(PORT, () => {console.log('Overpriced organic, artisanal, handmade, vegan tacos on port', PORT)});
