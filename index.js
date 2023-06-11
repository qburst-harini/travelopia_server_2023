import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import logger from "./src/logger.js";
import connectMongoose from "./src/config/mongoConnection.js";
import TravellerModel from "./src/models/user-schema.js";

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

server.get("/travellers", (req, res) => {
  TravellerModel.find()
    .then((data) =>
      res.status(200).send({ message: "Retrived successfully", data })
    )
    .catch((err) => logger.error(err));
});

server.post("/travellers", (req, res) => {
  TravellerModel.create(req.body)
    .then((data) =>
      res.status(200).send({ message: "Added successfully", data })
    )
    .catch((err) => logger.error(err));
});

/*Connect to mongoDB */
connectMongoose.then(() => logger.info("Connected to DB"));

server.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
