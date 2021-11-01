import mongoose from "mongoose";

const mongooseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

export default mongooseId;
