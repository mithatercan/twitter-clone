import { increment } from "./redux/slicers/profileSlicer";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      This is main app componenet{state.value}{" "}
      <button
        onClick={() => {
          handleClick();
        }}
      ></button>
    </div>
  );
};

export default App;
