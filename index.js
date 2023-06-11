import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import logger from "./src/logger.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

/* Middleware */
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/*End points */
server.get("/", (req, res) =>
  res.send(`Travelopia listening on port ${PORT}!`)
);

server.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
