import React from "react";
import { Link } from "react-router-dom";
function EditBtn() {
  return (
    <Link to="/edit" className="edit-btn">
      Edit profile
    </Link>
  );
}

export default EditBtn;
