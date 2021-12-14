import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalSlicer from "./slicers/modalSlicer";
import visitedProfileSlicer from "./slicers/visitedProfileSlicer";
import tweetSlicer from "./slicers/tweetSlicer";
import currentProfileSlicer from "./slicers/currentProfileSlicer";

export default configureStore({
  reducer: {
    visitedProfile: visitedProfileSlicer,
    currentProfile: currentProfileSlicer,
    modal: modalSlicer,
    tweet: tweetSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
