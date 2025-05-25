import { ObjectId } from "mongodb";
import connectDB, { collectionNames } from "./connectDB";

const userData = async (userId) => {
  const usersCollection = connectDB(collectionNames.USERS);
  const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
  return user;
};

export default userData;
