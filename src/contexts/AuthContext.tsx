"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, UserRole, LoginCredentials, SignupData } from "@/types";
import type { RootState } from "@/store";
import { logout as logoutRedux, updateUser as updateUserRedux } from "@/store/slices/authSlice";

// ============================================
// AUTH CONTEXT TYPES
// ============================================

interface AuthContextType {
  // State
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  
  // Role checks (helper functions)
  isUser: boolean;
  isParlor: boolean;
  isBeautician: boolean;
  isAdmin: boolean;
  isGuest: boolean;
  
  // Role-based permission check
  hasPermission: (allowedRoles: UserRole[]) => boolean;
}

// ============================================
// CONTEXT & PROVIDER
// ============================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development - remove in production
const MOCK_USERS: Record<string, User> = {
  user: {
    id: "user-1",
    email: "user@example.com",
    firstName: "Sarah",
    lastName: "Johnson",
    avatar: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "user",
    location: "Dhaka, Bangladesh",
    createdAt: new Date().toISOString(),
  },
  parlor: {
    id: "parlor-1",
    email: "parlor@example.com",
    firstName: "Velora",
    lastName: "Beauty Lounge",
    avatar: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "parlor",
    location: "Dhaka, Bangladesh",
    createdAt: new Date().toISOString(),
  },
  beautician: {
    id: "beautician-1",
    email: "beautician@example.com",
    firstName: "Emma",
    lastName: "Wilson",
    avatar: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "beautician",
    location: "Dhaka, Bangladesh",
    createdAt: new Date().toISOString(),
  },
  admin: {
    id: "admin-1",
    email: "admin@example.com",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state: RootState) => state.auth.user);
  const [localUser, setLocalUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Redux is source of truth when available; otherwise fallback to local state (e.g. mock login)
  const user = reduxUser ?? localUser;

  // Derived state
  const role: UserRole = user?.role ?? "guest";
  const isAuthenticated = !!user;
  const isUser = role === "user";
  const isParlor = role === "parlor";
  const isBeautician = role === "beautician";
  const isAdmin = role === "admin";
  const isGuest = role === "guest";

  // Check if user has permission based on allowed roles
  const hasPermission = useCallback((allowedRoles: UserRole[]) => {
    return allowedRoles.includes(role);
  }, [role]);

  // Hydrate local state from localStorage only when Redux has no user (e.g. first load, or mock login)
  useEffect(() => {
    if (reduxUser) {
      setIsLoading(false);
      return;
    }
    const initAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("accessToken");
        if (storedUser && storedToken) {
          setLocalUser(JSON.parse(storedUser) as User);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, [reduxUser]);

  // Login function (mock for demo; replace with authApi login mutation when backend is ready)
  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    try {
      const mockRole = credentials.email.includes("admin") ? "admin"
        : credentials.email.includes("parlor") ? "parlor"
        : credentials.email.includes("beautician") ? "beautician"
        : "user";
      const mockUser = MOCK_USERS[mockRole];
      await new Promise((r) => setTimeout(r, 500));
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("accessToken", "mock-token-" + mockRole);
      setLocalUser(mockUser);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup: use Redux authApi.useSignUpMutation in the signup page; context stays in sync via Redux state
  const signup = async (_data: SignupData): Promise<void> => {
    throw new Error("Use sign-up page with Redux useSignUpMutation");
  };

  // Logout: clear Redux and local state
  const logout = () => {
    dispatch(logoutRedux());
    setLocalUser(null);
  };

  // Update user function
  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      if (reduxUser) {
        dispatch(updateUserRedux(updates));
      } else {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setLocalUser(updatedUser);
      }
    }
  };

  const value: AuthContextType = {
    user,
    role,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    updateUser,
    isUser,
    isParlor,
    isBeautician,
    isAdmin,
    isGuest,
    hasPermission,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================
// HOOK
// ============================================

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// ============================================
// DEMO: Role Switcher (for development only)
// ============================================

export function useDemoRoleSwitcher() {
  const { logout } = useAuth();
  
  const switchRole = (role: UserRole) => {
    if (role === "guest") {
      logout();
      return;
    }
    
    const mockUser = MOCK_USERS[role];
    if (mockUser) {
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("accessToken", "mock-token-" + role);
      window.location.reload();
    }
  };
  
  return { switchRole };
}