import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReRender } from "../../redux/slicers/profileSlicer.js";
import * as api from "../../api/requests/profile.js";

function UnfollowBtn({ profile }) {
  const [disabled, setIsDisabled] = useState(false);
  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleClick = async () => {
    setIsDisabled(true);
    await api.unFollowUsername(user.data.token, profile.username);
    dispatch(setReRender(!user.reRender));
    setIsDisabled(false);
  };
  return (
    <button onClick={handleClick} disabled={disabled}>
      Unfollow
    </button>
  );
}

export default UnfollowBtn;
