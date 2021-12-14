import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Edit from "./views/Edit";
import Settings from "./views/Settings";
import NewTweet from "./views/NewTweet";
import Tweet from "./views/Tweet";
import Explore from "./views/Explore";
import Notifications from "./views/Notifications";
import Bookmark from "./views/Bookmark";
import Messages from "./views/Messages";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />

        {/* Private Routes */}
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/explore" component={Explore} />
        <PrivateRoute exact path="/tweet" component={NewTweet} />
        <PrivateRoute exact path="/tweet/:id" component={Tweet} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile/:username" component={Profile} />
        <PrivateRoute exact path="/edit" component={Edit} />
        <PrivateRoute exact path="/notifications" component={Notifications} />
        <PrivateRoute exact path="/messages" component={Messages} />
        <PrivateRoute exact path="/bookmarks" component={Bookmark} />
        <PrivateRoute exact path="/lists" component={Home} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
