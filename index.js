import express from "express";
import dotenv from "dotenv";
import cors from "cors";

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
  console.log(`Server is listening on port ${PORT}`);
});
