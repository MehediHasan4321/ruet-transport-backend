const { MongoClient, ServerApiVersion } = require("mongodb");

let databaseURL = process.env.DB_URI;
databaseURL = databaseURL.replace("<username>", process.env.DB_USERNAME);
databaseURL = databaseURL.replace("<password>", process.env.DB_PASSWORD);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const DBClient = new MongoClient(databaseURL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

const connectDB = async () => {
    
  

  await DBClient
    .connect()
    .then(() => {
      console.log("Database connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = {connectDB,DBClient};


