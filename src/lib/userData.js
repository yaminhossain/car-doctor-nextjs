import connectDB from "./connectDB";
const userData = async (serverOnlyUser) => {
  console.log("++++++SERVER USER+++++++++++", serverOnlyUser);
  const userCollection = connectDB("USER");
  // const  result = await userCollection.findOne(e)

  // return result;
};

export default userData;
