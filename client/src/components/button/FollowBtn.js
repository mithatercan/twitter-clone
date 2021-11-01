import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as api from "../../api/requests/profile.js";
import { setReRender } from "../../redux/slicers/profileSlicer";

function FollowBtn({ profile }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const user = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const handleClick = async () => {
    setIsDisabled(true);
    await api.followByUsername(user.data.token, profile.username);
    dispatch(setReRender(!user.reRender));
    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      Follow
    </button>
  );
}

export default FollowBtn;
