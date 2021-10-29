import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/feed" component={Feed} />
      </Switch>
    </Router>
  );
};

export default App;
