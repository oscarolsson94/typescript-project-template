// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "./types";

const initialState: UserState = {
  user: {
    id: "",
    email: "",
    jwtToken: "",
    refreshToken: "",
  },
  loading: false,
  errors: "",
};
const userLocalStorage = localStorage.getItem("user");
if (userLocalStorage != null)
  initialState.user = JSON.parse(localStorage.getItem("user") || "{}");

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    resetUser: (state) => {
      state.user = {
        id: "",
        email: "",
        jwtToken: "",
        refreshToken: "",
      };
      localStorage.removeItem("user");
    },
  },
});

export default userSlice.reducer;
