import React, { useEffect } from "react";
import * as auth from "../api/requests/auth";
import getFormData from "../utils/getFormData";
import { useDispatch, useSelector } from "react-redux";
import { setErrors, signin } from "../redux/slicers/profileSlicer";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(setErrors([]));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    const response = await auth.signup(formData);
    if (!response.token) {
      dispatch(setErrors(response));
    } else {
      dispatch(signin(response));
      history.push("/feed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <input type="password" name="confirm" placeholder="Confirm password" />
      <button type="submit">SIGN UP</button>
      {profile.errors[0] && profile.errors[0].msg}
    </form>
  );
};

export default SignIn;
