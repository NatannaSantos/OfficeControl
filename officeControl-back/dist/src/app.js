import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import router from "./routes/router.js";
dotenv.config();
var app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Express server listening on port " + PORT);
});
