import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/route/PrivateRoute";
import Layout from "./components/layout/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Tweet from "./pages/Tweet";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Layout>
          <PrivateRoute exact path="/settings" component={Settings} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/tweet" component={Tweet} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile/:username" component={Profile} />
          <Route exact path="/notifications" component={Notifications} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
