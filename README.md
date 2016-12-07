# jwt-bcrypt-demo

once it's forked/cloned:
  npm install
  create db called <your_db_name_here>
  run
    psql -d <your_db_name_here> -f ./lib/schema.sql
    psql -d <your_db_name_here> -f ./lib/seeds.sql    
  create a .env that matches the pgConfig object in lib/db.js
    for example, mine looks like this

      PG_HOST=localhost
      PG_PORT=5432
      PG_DATABASE=dan
      PG_USER=daniel_pease
      PG_PASSWORD=

  get into psql and query the database to make sure everything is k
