import React from "react";
import * as auth from "../../api/requests/auth";
import getFormData from "../../utils/getFormData";
import { useHistory } from "react-router-dom";
import { setErrors, signin } from "../../redux/slicers/profileSlicer";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);

    const response = await auth.signin(formData);
    if (response.type === "error") {
      dispatch(setErrors(response.data));
    } else {
      dispatch(signin(response.data));
      history.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">SIGN IN</button>
      {profile.errors && profile.errors.map((error) => <p>{error.msg}</p>)}
    </form>
  );
};

export default Signin;
