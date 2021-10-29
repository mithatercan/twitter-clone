import { configureStore } from "@reduxjs/toolkit";
import { profileSlicer } from "./slicers/profileSlicer";

export default configureStore({
  reducer: {
    profile: profileSlicer,
  },
});
