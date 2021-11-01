import axios from "axios";
import * as url from "../urls";

export const signin = (data) => {
  return axios
    .post(url.SIGN_IN, data)
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};

export const signup = (data) => {
  return axios
    .post(url.SIGN_UP, data)
    .then((result) => {
      return { type: "sucess", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};
