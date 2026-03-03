import { api, ApiResponse } from "./api";
import { 
  AuthResponse, 
  LoginCredentials, 
  SignupData, 
  User 
} from "@/types";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
    return api.post<ApiResponse<AuthResponse>>("/auth/login", credentials);
  },

  signup: async (data: SignupData): Promise<ApiResponse<AuthResponse>> => {
    return api.post<ApiResponse<AuthResponse>>("/auth/signup", data);
  },

  logout: async (): Promise<ApiResponse<null>> => {
    return api.post<ApiResponse<null>>("/auth/logout");
  },

  refreshToken: async (refreshToken: string): Promise<ApiResponse<AuthResponse>> => {
    return api.post<ApiResponse<AuthResponse>>("/auth/refresh", { refreshToken });
  },

  forgotPassword: async (email: string): Promise<ApiResponse<{ message: string }>> => {
    return api.post<ApiResponse<{ message: string }>>("/auth/forgot-password", { email });
  },

  resetPassword: async (token: string, password: string): Promise<ApiResponse<{ message: string }>> => {
    return api.post<ApiResponse<{ message: string }>>("/auth/reset-password", { token, password });
  },

  verifyEmail: async (code: string): Promise<ApiResponse<{ message: string }>> => {
    return api.post<ApiResponse<{ message: string }>>("/auth/verify-email", { code });
  },

  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return api.get<ApiResponse<User>>("/auth/me");
  },

  updateProfile: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    return api.patch<ApiResponse<User>>("/auth/profile", data);
  },
};
