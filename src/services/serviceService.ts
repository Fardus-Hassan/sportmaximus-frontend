import { api, ApiResponse, PaginatedResponse } from "./api";
import { Service } from "@/types";

interface ServiceFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  parlorId?: string;
  beauticianId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export const serviceService = {
  // Get all services (public - for feed)
  getAll: async (filters?: ServiceFilters): Promise<PaginatedResponse<Service>> => {
    return api.get<PaginatedResponse<Service>>("/services", { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // Get single service
  getById: async (id: string): Promise<ApiResponse<Service>> => {
    return api.get<ApiResponse<Service>>(`/services/${id}`);
  },

  // Get services by parlor
  getByParlor: async (parlorId: string, filters?: ServiceFilters): Promise<PaginatedResponse<Service>> => {
    return api.get<PaginatedResponse<Service>>(`/parlors/${parlorId}/services`, { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // Get services by beautician
  getByBeautician: async (beauticianId: string, filters?: ServiceFilters): Promise<PaginatedResponse<Service>> => {
    return api.get<PaginatedResponse<Service>>(`/beauticians/${beauticianId}/services`, { params: filters as Record<string, string | number | boolean | undefined> });
  },

  // ============================================
  // PARLOR/BEAUTICIAN ONLY
  // ============================================

  // Create service (parlor/beautician)
  create: async (data: Partial<Service>): Promise<ApiResponse<Service>> => {
    return api.post<ApiResponse<Service>>("/services", data);
  },

  // Update service (parlor/beautician - owner only)
  update: async (id: string, data: Partial<Service>): Promise<ApiResponse<Service>> => {
    return api.patch<ApiResponse<Service>>(`/services/${id}`, data);
  },

  // Delete service (parlor/beautician - owner only)
  delete: async (id: string): Promise<ApiResponse<null>> => {
    return api.delete<ApiResponse<null>>(`/services/${id}`);
  },

  // Toggle service active status
  toggleActive: async (id: string): Promise<ApiResponse<Service>> => {
    return api.patch<ApiResponse<Service>>(`/services/${id}/toggle-active`);
  },

  // ============================================
  // MY SERVICES (for logged in parlor/beautician)
  // ============================================

  getMyServices: async (filters?: ServiceFilters): Promise<PaginatedResponse<Service>> => {
    return api.get<PaginatedResponse<Service>>("/my/services", { params: filters as Record<string, string | number | boolean | undefined> });
  },
};
