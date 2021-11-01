import jwt from "jsonwebtoken";
import Profile from "../models/profile.js";

const auth = async (req, res, next) => {
  if (req.headers.token) {
    try {
      let token = req.headers.token;
      const decoded = jwt.verify(token, process.env.SECRET);
      if (decoded) {
        req.user = await Profile.findById(decoded.id);
        next();
      } else {
        return res.status(401).send({
          type: "error",
          msg: "Invalid token",
        });
      }
    } catch (err) {
      return res.status(401).send({
        type: "error",
        msg: "Invalid token",
      });
    }
  } else {
    res.status(401).send({ type: "error", msg: "You need a token" });
  }
};
export default auth;
