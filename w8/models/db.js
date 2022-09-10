const pgp = require("pg-promise")({
  capSQL: true,
});

const cn = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432,
  max: 30,
};

const db = pgp(cn);
