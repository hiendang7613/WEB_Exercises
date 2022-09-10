const pgp = require("pg-promise")({
  capSQL: true,
});
const schema = "public";
const cn = {
  user: "postgres",
  host: "localhost",
  database: "qlbh",
  password: "123456",
  port: 5432,
  max: 30,
};
const db = pgp(cn);

// pgp.pg.types.setTypeParser(1114, function (stringValue) {
//   return stringValue;
// });

exports.load = async (tbName) => {
  const table = new pgp.helpers.TableName({ table: tbName, schema: schema });
  const query = pgp.as.format("SELECT * FROM $1", table);
  try {
    const res = await db.any(query);
    return res;
  } catch (error) {
    console.log("error database.config/load : ", error);
  }
};

exports.get = async (tbName, dict) => {
  const table = new pgp.helpers.TableName({ table: tbName, schema: schema });

  let qStr = pgp.as.format('SELECT * FROM $1 WHERE ', table); 
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      qStr = qStr.concat(`"${key}" = '${dict[key]}' AND `);
    }
  }
  qStr = qStr.substring(0, qStr.length - 5);

  const query = pgp.as.format(qStr, table);
  try {
    const res = await db.any(query);
    return res;
  } catch (error) {
    console.log("error database.config/get : ", error);
  }
};

exports.add = async (tbName, entity) => {
  const table = new pgp.helpers.TableName({ table: tbName, schema: schema });
  const query = pgp.helpers.insert(entity, null, table) + ' RETURNING  *';
  try {
    const res = await db.one(query);
    return res;
  } catch (error) {
    console.log("error database.config/add : ", error);
  }
};
