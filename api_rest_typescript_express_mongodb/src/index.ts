import server from "./server";
import dbConnect from "./db/database";

process.loadEnvFile();

const { PORT } = process.env;

dbConnect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    throw Error(error.message);
  });
