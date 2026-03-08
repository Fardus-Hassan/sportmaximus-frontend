import { baseApi } from "./baseApi";
import type {
  SignUpRequest,
  SignUpApiResponse,
  LoginRequest,
  ForgotPasswordRequest,
  ForgotPasswordVerifyOtpRequest,
  ForgotPasswordResendOtpRequest,
  ForgotPasswordResetRequest,
} from "@/types";
import type { User } from "@/types";
import { setCredentials, updateUser } from "../slices/authSlice";

/** Map API user role (e.g. "USER") to app UserRole */
function mapRole(role: string): User["role"] {
  const r = role?.toLowerCase();
  if (r === "user" || r === "parlor" || r === "beautician" || r === "manager" || r === "admin") {
    return r;
  }
  return "user";
}

/** Map API user object to app User type */
function mapApiUserToUser(apiUser: SignUpApiResponse["data"]["user"]): User {
  return {
    id: apiUser.id,
    firstName: apiUser.firstName,
    lastName: apiUser.lastName,
    email: apiUser.email,
    role: mapRole(apiUser.role),
    avatar: apiUser.image ?? undefined,
    createdAt: apiUser.createdAt,
  };
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<
      { user: User; accessToken: string },
      SignUpRequest
    >({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      transformResponse: (raw: SignUpApiResponse) => {
        const user = mapApiUserToUser(raw.data.user);
        return { user, accessToken: raw.data.accessToken };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: data.user, accessToken: data.accessToken }));
        } catch {
          // Error handled by component
        }
      },
    }),
    login: builder.mutation<
      { user: User; accessToken: string },
      LoginRequest
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (raw: SignUpApiResponse) => {
        const user = mapApiUserToUser(raw.data.user);
        return { user, accessToken: raw.data.accessToken };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: data.user, accessToken: data.accessToken }));
        } catch {
          // Error handled by component
        }
      },
    }),
    forgotPassword: builder.mutation<{ success: boolean; message?: string }, ForgotPasswordRequest>({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    verifyForgotPasswordOtp: builder.mutation<
      { resetToken?: string },
      ForgotPasswordVerifyOtpRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password/verify-otp",
        method: "POST",
        body,
      }),
      transformResponse: (raw: { data?: { resetToken?: string } }) => ({
        resetToken: raw.data?.resetToken,
      }),
    }),
    resendForgotPasswordOtp: builder.mutation<
      { success: boolean; message?: string },
      ForgotPasswordResendOtpRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password/resend-otp",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<{ success: boolean; message?: string }, ForgotPasswordResetRequest>({
      query: (body) => ({
        url: "/auth/forgot-password/reset",
        method: "POST",
        body,
      }),
    }),
    getMe: builder.query<User, void>({
      query: () => ({ url: "/users/me" }),
      transformResponse: (raw: { data: SignUpApiResponse["data"]["user"] }) =>
        mapApiUserToUser(raw.data),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUser(data));
        } catch {
          // Component handles error
        }
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyForgotPasswordOtpMutation,
  useResendForgotPasswordOtpMutation,
  useResetPasswordMutation,
  useGetMeQuery,
} = authApi;
