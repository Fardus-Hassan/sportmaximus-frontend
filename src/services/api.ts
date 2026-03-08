import { ApiResponse, ApiError, PaginatedResponse } from "@/types";

// ============================================
// API CONFIGURATION
// ============================================

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://206.162.244.175:5007/api/v1";

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

// ============================================
// API CLIENT
// ============================================

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getAuthHeaders(): HeadersInit {
    const token = typeof window !== "undefined" 
      ? localStorage.getItem("accessToken") 
      : null;
    
    return {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean | undefined>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    
    if (!response.ok) {
      const error: ApiError = {
        success: false,
        message: data.message || "An error occurred",
        errors: data.errors,
      };
      throw error;
    }
    
    return data;
  }

  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config?.params);
    
    const response = await fetch(url, {
      method: "GET",
      headers: this.getAuthHeaders(),
      ...config,
    });
    
    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, body?: unknown, config?: RequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config?.params);
    
    const response = await fetch(url, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: body ? JSON.stringify(body) : undefined,
      ...config,
    });
    
    return this.handleResponse<T>(response);
  }

  async put<T>(endpoint: string, body?: unknown, config?: RequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config?.params);
    
    const response = await fetch(url, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: body ? JSON.stringify(body) : undefined,
      ...config,
    });
    
    return this.handleResponse<T>(response);
  }

  async patch<T>(endpoint: string, body?: unknown, config?: RequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config?.params);
    
    const response = await fetch(url, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: body ? JSON.stringify(body) : undefined,
      ...config,
    });
    
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    const url = this.buildUrl(endpoint, config?.params);
    
    const response = await fetch(url, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
      ...config,
    });
    
    return this.handleResponse<T>(response);
  }
}

// ============================================
// API INSTANCE
// ============================================

export const api = new ApiClient(API_BASE_URL);

// ============================================
// HELPER TYPES FOR SERVICES
// ============================================

export type { ApiResponse, ApiError, PaginatedResponse };
