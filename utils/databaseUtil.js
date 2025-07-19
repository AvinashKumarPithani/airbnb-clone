const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://root:root@cluster0.chnhza3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback(client);
    })
    .catch((err) => {
      console.log("Errot while connecting to Mongo: ", err);
    });
};

module.exports = mongoConnect;
