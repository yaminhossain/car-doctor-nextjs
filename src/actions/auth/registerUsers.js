"use server";

import bcrypt from "bcrypt";
import connectDB, { collectionNames } from "@/lib/connectDB";

const registerUsers = async ({ name, email, confirmPassword: password }) => {
  const insertionData = { name, email, password };
  insertionData.photo = "";
  insertionData.coverPhoto = "";
  insertionData.role = "user";
  insertionData.provider = "emailPassword";
  insertionData.providerAccountId = null;

  // ======Hashing the password using bcrypt and 10 round of salt=====
  const hashedPassword = await bcrypt.hash(password, 10);
  insertionData.password = hashedPassword;
  console.log("insertion data", insertionData);
  try {
    const usersCollection = connectDB(collectionNames.USERS);
    const existingUser = await usersCollection.findOne({ email: email });
    if (!existingUser) {
      const result = await usersCollection.insertOne(insertionData);
      return { status: "success", userId: result.insertedId.toString() };
    } else {
      return { status: "failed", message: "User already exists" };
    }
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Database error" };
  }
};

export default registerUsers;

// =======MongoDB promise data sending to client side's buffer problem solution in NextJs=======
//---Solution 1-----
// result.insertedId = result.insertedId.toString();
// return result;
// -----Solution2----
// return JSON.parse(JSON.stringify(result));
