const db = require("../config/database.config");
const tbName = "Users";

// exports for account

exports.all = async () => {
  return await db.load(tbName);
};
exports.get = async (username) => {
  return await db.get(tbName, { f_Username: username });
};
exports.add = async (entity) => {
  return await db.add(tbName,entity);
};
