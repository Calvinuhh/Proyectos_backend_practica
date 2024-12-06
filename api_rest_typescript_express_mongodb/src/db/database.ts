import { connect } from "mongoose";

process.loadEnvFile();

const { DB_URI } = process.env as { DB_URI: string };

const dbConnect = async (): Promise<void> => {
  try {
    await connect(DB_URI);
    console.log("Database conection succesful");
  } catch (error) {
    const err = error as Error;
    console.log("It was unable to connect to the database");
    throw Error(err.message);
  }
};

export default dbConnect;
