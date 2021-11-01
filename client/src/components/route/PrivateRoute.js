import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const profile = useSelector((state) => state.profile);

  return (
    <Route
      {...rest}
      render={(props) =>
        profile.data ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
