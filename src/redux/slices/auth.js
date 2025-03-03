import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
  sessionAvailable: false,
  loading: false,
  userName: "sdsd",
  userId: "",
  error: {
    result: false,
    message: "",
  },
  success: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername(state, { payload }) {
      state.userName = payload.userName;
    },
    setAvailableSession(state, action) {
      state.sessionAvailable = true;
    },
    clearUserSession(state, action) {
      window.location.href = "/";
      state = initialState;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {},
});

export default AuthSlice.reducer;
export const { setAvailableSession, clearUserSession, setUsername } =
  AuthSlice.actions;
