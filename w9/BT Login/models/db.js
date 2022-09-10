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

exports.load = async (tbName) => {
  const table = new pgp.helpers.TableName({
    table: tbName,
    schema: schema,
  });
  const qStr = pgp.as.format("SELECT * FROM $1", table);
  try {
    const res = await db.any(qStr);
    return res;
  } catch (error) {
    console.log("error db/load:", error);
  }
};
