import React from "react";
import getFormData from "../../utils/getFormData";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/currentProfileActions";

const SignIn = () => {
  const { data, loading, errors } = useSelector(
    (state) => state.currentProfile
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(signUp(formData));
  };

  return data ? (
    <Redirect to="/home" />
  ) : (
    <div className="auth__form--wrapper display-flex justify-content-c ">
      <form
        className="auth__form display-flex  flex-direction-c"
        onSubmit={handleSubmit}
      >
        <h2>Sign up</h2>
        <input type="text" name="fname" placeholder="First name" />
        <input type="text" name="lname" placeholder="Last name" />
        <input type="email" name="email" placeholder="email" />
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="password" name="confirm" placeholder="Confirm password" />
        <small>{errors && errors[0].msg}</small>
        <input type="submit" value={loading ? "Loading..." : "Sign up"} />
        <p>
          Do you have an account?
          <Link to="/signin"> Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
