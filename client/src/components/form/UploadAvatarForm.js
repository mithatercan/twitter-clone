import React, { useState } from "react";
import generateBase64 from "../../utils/generateBase64";
import { uploadAvatar } from "../../redux/actions/currentProfileActions";
import { useDispatch } from "react-redux";
const UploadAvatarForm = () => {
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const base64 = await generateBase64(file);
    dispatch(uploadAvatar(formData));
    setAvatar(base64);
  };

  return (
    <form
      onChange={handleChange}
      className="upload-form display-flex align-items-c justify-content-se"
    >
      <input type="file" name="avatar" />
      <div>Upload Avatar</div>
      {avatar && <img src={avatar} alt="avatar" />}
    </form>
  );
};

export default UploadAvatarForm;
