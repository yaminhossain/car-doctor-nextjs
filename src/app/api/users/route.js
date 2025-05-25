import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import connectDB, { collectionNames } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function GET(req) {
  const serverOnlyUser = await getServerSession(authOptions);
  const usersCollection = connectDB(collectionNames.USERS);
  const user = await usersCollection.findOne({
    _id: new ObjectId(serverOnlyUser?.user?.id),
  });
  return Response.json(user);
}
