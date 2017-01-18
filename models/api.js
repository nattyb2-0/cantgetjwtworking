const db = require('../lib/db');

function getAllSecrets(req, res, next) {
  db.many('SELECT * FROM secretstuff')
    .then((secrets) => {
      res.secrets = secrets
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  getAllSecrets
}
