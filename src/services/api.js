import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth API
export const authAPI = {
  register: (data) => api.post("/api/auth/register", data),
  login: (data) => api.post("/api/auth/login", data),
  logout: () => api.post("/api/auth/logout"),
  checkAuth: () => api.get("/api/auth/check"),
};

// User API
export const userAPI = {
  getProfile: () => api.get("/api/user/profile"),
};

// Crypto API
export const cryptoAPI = {
  getAll: () => api.get("/api/crypto"),
  getGainers: () => api.get("/api/crypto/gainers"),
  getNewListings: () => api.get("/api/crypto/new"),
  getLivePrices: () => api.get("/api/crypto/live-prices"),
  addCrypto: (data) => api.post("/api/crypto", data),
};

export default api;
