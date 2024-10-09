const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://maankalaria:maan1406@cluster0.unf1y.mongodb.net/";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
