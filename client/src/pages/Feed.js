import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/slicers/profileSlicer";
import { useHistory } from "react-router";

const Feed = () => {
  const state = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(signout());
          history.push("/signin");
        }}
      >
        log out
      </button>
      <h1>Hey! Welcome back {state.username}</h1>
    </div>
  );
};

export default Feed;
