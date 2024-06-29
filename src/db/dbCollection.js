const { DBClient } = require("./index");

const databaseName = process.env.DATABASE_NAME || "ruet-transport";
  const usersCollection = DBClient.db(databaseName).collection("users");
  const busCollection =
    DBClient.db(databaseName).collection("transports");
  const bookingCollection = DBClient.db(databaseName).collection();

module.exports = {
  usersCollection,
  busCollection,
  bookingCollection
};
