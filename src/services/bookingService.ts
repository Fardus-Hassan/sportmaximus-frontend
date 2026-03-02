import { api, ApiResponse, PaginatedResponse } from "./api";
import { Booking, BookingStatus, TimeSlot } from "@/types";

interface BookingFilters {
  status?: BookingStatus;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

interface CreateBookingData {
  serviceId: string;
  beauticianId: string;
  date: string;
  time: string;
  notes?: string;
}

export const bookingService = {
  // ============================================
  // USER BOOKINGS
  // ============================================

  // Get my bookings (user - their bookings)
  getMyBookings: async (filters?: BookingFilters): Promise<PaginatedResponse<Booking>> => {
    return api.get<PaginatedResponse<Booking>>("/my/bookings", { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // Create booking (user)
  create: async (data: CreateBookingData): Promise<ApiResponse<Booking>> => {
    return api.post<ApiResponse<Booking>>("/bookings", data);
  },

  // Cancel booking (user - own booking only)
  cancel: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/cancel`);
  },

  // Get booking details
  getById: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.get<ApiResponse<Booking>>(`/bookings/${id}`);
  },

  // ============================================
  // PARLOR BOOKINGS
  // ============================================

  // Get parlor bookings (parlor owner)
  getParlorBookings: async (filters?: BookingFilters): Promise<PaginatedResponse<Booking>> => {
    return api.get<PaginatedResponse<Booking>>("/parlor/bookings", { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // ============================================
  // BEAUTICIAN BOOKINGS
  // ============================================

  // Get beautician bookings (beautician - their appointments)
  getBeauticianBookings: async (filters?: BookingFilters): Promise<PaginatedResponse<Booking>> => {
    return api.get<PaginatedResponse<Booking>>("/beautician/bookings", { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // ============================================
  // BOOKING MANAGEMENT (Parlor/Beautician)
  // ============================================

  // Confirm booking
  confirm: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/confirm`);
  },

  // Start service
  startService: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/start`);
  },

  // Complete service
  complete: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/complete`);
  },

  // Mark as no-show
  markNoShow: async (id: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/no-show`);
  },

  // Reschedule booking
  reschedule: async (id: string, date: string, time: string): Promise<ApiResponse<Booking>> => {
    return api.patch<ApiResponse<Booking>>(`/bookings/${id}/reschedule`, { date, time });
  },

  // ============================================
  // AVAILABILITY
  // ============================================

  // Get available time slots for a beautician on a specific date
  getAvailableSlots: async (beauticianId: string, date: string): Promise<ApiResponse<TimeSlot[]>> => {
    return api.get<ApiResponse<TimeSlot[]>>(`/beauticians/${beauticianId}/availability`, { 
      params: { date } 
    });
  },
};
