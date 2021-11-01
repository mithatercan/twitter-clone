import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profile.js";
import tweetRoutes from "./routes/tweet.js";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";
dontenv.config();

import "./database/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send("Twitter clone 🥳");
});

// PFORILE ROUTES
app.use("/profile", profileRoutes);

// POST ROUTES
app.use("/tweet", tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
