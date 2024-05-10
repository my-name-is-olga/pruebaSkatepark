const pg = require("pg");
const { Pool } = pg;

const user = "postgres";
const pass = "1234";
const host = "localhost";
const port = "5432";
const name = "skatepark";

const pool = new Pool({
    connectionString: `postgres://${user}:${pass}@${host}:${port}/${name}`,
  });

module.exports = { pool };
