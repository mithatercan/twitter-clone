import React from "react";
import { editProfile } from "../../redux/actions/currentProfileActions";
import getFormData from "../../utils/getFormData";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const UpdateProfileForm = () => {
  const { fname, lname, bio, location, website, username } = useSelector(
    (state) => state.currentProfile.data
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(editProfile(formData));
    history.push(`/profile/${username}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="auth__form display-flex align-items-c justify-content-c flex-direction-c"
    >
      <input
        type="text"
        name="fname"
        placeholder="First name"
        defaultValue={fname}
      />
      <input
        type="text"
        name="lname"
        placeholder="Last name"
        defaultValue={lname}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        defaultValue={location}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        defaultValue={website}
      />
      <input type="text" name="bio" placeholder="Bio" defaultValue={bio} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default UpdateProfileForm;
