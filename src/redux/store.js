import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/auth";
import ThemeSlice from "./slices/theme";

export const store = configureStore({
  reducer: {
    // our reducers goes here
    AuthSlice,
    ThemeSlice,
  },
});

export default store;
