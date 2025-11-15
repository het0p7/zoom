import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";
import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const uri = process.env.MONGO_URL;

const port = 8000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

const start = async () => {
  app.set("mongo_user");
  const connectionDB = await mongoose.connect(
    "mongodb+srv://hetparekh09_db_user:zerodhaclonehet@zoom.dee1isl.mongodb.net/"
  );
  console.log(`MONGO connected DB Host = ${connectionDB.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("listening on port 8000");
  });
};

start();
