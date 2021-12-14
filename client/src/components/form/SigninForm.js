import React from "react";
import getFormData from "../../utils/getFormData";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/currentProfileActions";

const Signin = () => {
  const { data, loading, errors } = useSelector(
    (state) => state.currentProfile
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(signIn(formData));
    console.log(errors);
  };

  return data ? (
    <Redirect to="/home" />
  ) : (
    <div className="auth__form--wrapper display-flex justify-content-c">
      <form
        className="auth__form display-flex  flex-direction-c"
        onSubmit={handleSubmit}
      >
        <h2>Sign in to twitter clone</h2>
        <input type="text" name="username" placeholder="Username or email" />
        <input type="password" name="password" placeholder="Password" />
        <small>{errors && errors[0].msg}</small>
        <input type="submit" value={loading ? "Loading..." : "Sign in"} />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
