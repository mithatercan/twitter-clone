import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/instagram-clone";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbConnection = mongoose
  .connect(URL, options)
  .then((result) => console.log("Database connection is success."))
  .catch((err) => console.log(err.message));

export default dbConnection;
