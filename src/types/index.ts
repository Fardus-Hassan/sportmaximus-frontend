// ============================================
// USER & ROLE TYPES
// ============================================

export type UserRole = "guest" | "user" | "parlor" | "beautician" | "admin";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  phone?: string;
  location?: string;
  createdAt: string;
}

export interface UserProfile extends User {
  coverImage?: string;
  description?: string;
  rating?: {
    value: number;
    count: number;
  };
  distance?: string;
}

export interface ParlorProfile extends UserProfile {
  parlorName: string;
  businessAddress: string;
  totalBeauticians: number;
  totalServices: number;
  isVerified: boolean;
}

export interface BeauticianProfile extends UserProfile {
  specialization: string;
  experience: string;
  parlorId?: string;
  parlorName?: string;
  portfolio: string[];
  availability: AvailabilitySlot[];
}

// ============================================
// SERVICE TYPES
// ============================================

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  duration: number; // in minutes
  category: string;
  media: MediaItem[];
  parlorId: string;
  parlorName: string;
  beauticianId?: string;
  beauticianName?: string;
  rating: number;
  reviewCount: number;
  isActive: boolean;
}

export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

// ============================================
// BOOKING TYPES
// ============================================

export type BookingStatus = 
  | "pending" 
  | "confirmed" 
  | "in_progress" 
  | "completed" 
  | "cancelled" 
  | "no_show";

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  parlorId: string;
  parlorName: string;
  beauticianId: string;
  beauticianName: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
}

// ============================================
// AVAILABILITY & SCHEDULE
// ============================================

export interface AvailabilitySlot {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // "09:00"
  endTime: string; // "17:00"
  isAvailable: boolean;
}

export interface TimeSlot {
  time: string;
  isAvailable: boolean;
  isBooked: boolean;
}

// ============================================
// REVIEW TYPES
// ============================================

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  serviceId: string;
  serviceName: string;
  rating: number;
  comment: string;
  createdAt: string;
  reply?: {
    message: string;
    createdAt: string;
  };
}

// ============================================
// NOTIFICATION TYPES
// ============================================

export type NotificationType = 
  | "booking_new" 
  | "booking_confirmed" 
  | "booking_cancelled" 
  | "booking_reminder"
  | "review_new"
  | "message_new"
  | "promotion";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  data?: Record<string, unknown>;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

// ============================================
// AUTH TYPES
// ============================================

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Exclude<UserRole, "guest" | "admin">;
  referralCode?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// ============================================
// STATS & ANALYTICS (for dashboards)
// ============================================

export interface DashboardStats {
  totalBookings: number;
  pendingBookings: number;
  completedBookings: number;
  totalRevenue: number;
  averageRating: number;
  totalReviews: number;
}

export interface AdminStats extends DashboardStats {
  totalUsers: number;
  totalParlors: number;
  totalBeauticians: number;
  newUsersThisMonth: number;
}
