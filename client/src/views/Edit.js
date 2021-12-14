import React from "react";
import UpdateProfileForm from "../components/form/UpdateProfileForm";
import UploadAvatarForm from "../components/form/UploadAvatarForm";
const Edit = () => {
  return (
    <div className="edit-page">
      <UploadAvatarForm />
      <UpdateProfileForm />
    </div>
  );
};

export default Edit;
