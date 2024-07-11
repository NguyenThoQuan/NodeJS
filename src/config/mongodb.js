import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";

let nodeJSDatabaseInstance = null;

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();
  nodeJSDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

export const GET_DB = () => {
  if (!nodeJSDatabaseInstance)
    throw new Error("Must connect to Database first !");
  return nodeJSDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};
