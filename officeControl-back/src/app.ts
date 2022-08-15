import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import router from "./routes/router.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});