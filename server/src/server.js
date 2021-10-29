import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profile.js";
import postRoutes from "./routes/post.js";
import dontenv from "dotenv";

dontenv.config();

import "./database/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// PFORILE ROUTES
app.use("/profile", profileRoutes);

// POST ROUTES
app.use("/post", postRoutes);

app.get("/posts", (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
