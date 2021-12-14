import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signOut } from "../../redux/actions/currentProfileActions";
function SidebarModal() {
  const isOpened = useSelector((state) => state.modal.sidebarModal);
  const { data } = useSelector((state) => state.currentProfile);

  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(signOut());
  };

  return data ? (
    <div
      className={`sidebar-left__modal ${
        isOpened && "opened"
      } display-flex flex-direction-c`}
    >
      <button>
        <Link to="/edit">Edit profile</Link>
      </button>
      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
}

export default SidebarModal;
