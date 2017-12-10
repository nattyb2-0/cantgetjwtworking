const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var secret = process.env.SECRET;
const salt = 10;
const signToken = (user)=>{
  console.log('yeah')
  console.log(user.username)
  return jwt.sign({
        iss: 'jwt-demo',
        sub: user.username,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1)
        },secret)
}


function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO users (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, salt)])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}

function authenticate(req, res, next) {
  console.log(req.body.password)
  db.one('SELECT * FROM users WHERE username = $/username/;', req.body)
    .then((data) => {
      console.log(data)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        // const myToken = signToken(data);

      const token = jwt.sign({_id: 2}, process.env.SECRET, {expiresIn: '24h'});
        res.status(200).json(token);
      } else {
        res.status(500).send('fuck u fite me irl');
      }
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
}
