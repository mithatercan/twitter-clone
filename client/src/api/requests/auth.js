import axios from "axios";
import * as url from "../urls";

export const signin = (data) => {
  return axios
    .post(url.SIGN_IN, data)
    .then((result) => result.data)
    .catch((err) => err.response.data.errors);
};

export const signup = (data) => {
  return axios
    .post(url.SIGN_UP, data)
    .then((result) => result.data)
    .catch((err) => err.response.data.errors);
};
