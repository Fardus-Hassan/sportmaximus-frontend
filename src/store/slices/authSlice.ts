import { createSlice } from "@reduxjs/toolkit";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const loadFromStorage = (): AuthState => {
  if (typeof window === "undefined") {
    return { user: null, accessToken: null };
  }
  try {
    const user = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");
    return {
      user: user ? (JSON.parse(user) as User) : null,
      accessToken,
    };
  } catch {
    return { user: null, accessToken: null };
  }
};

const initialState: AuthState = loadFromStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: {
        payload: { user: User; accessToken: string };
      }
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("accessToken", action.payload.accessToken);
      }
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
    updateUser: (state, action: { payload: Partial<User> }) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      }
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
