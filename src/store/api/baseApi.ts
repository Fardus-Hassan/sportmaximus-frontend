import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://206.162.244.175:5007/api/v1";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as { auth: { accessToken: string | null } };
      const token = state.auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["User", "Auth"],
  endpoints: () => ({}),
});
