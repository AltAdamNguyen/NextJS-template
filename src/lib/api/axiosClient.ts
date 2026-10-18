/**
 * axiosClient.ts — Axios singleton instance (stub)
 *
 * TODO: Thêm interceptors xác thực (Bearer token, refresh token)
 * TODO: Thêm interceptor ký HMAC-SHA256 nếu yêu cầu bảo mật
 * TODO: Thêm xử lý lỗi toàn cục (global error handler)
 */

import axios from 'axios';

// Tạo instance với cấu hình mặc định
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true, // Gửi cookie httpOnly (refresh token)
});

// ── Request Interceptor ──────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    // TODO: Gắn Access Token vào header Authorization
    // const token = getAccessToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    // TODO: Ký HMAC-SHA256 nếu cần (import từ lib/crypto/cipher.ts)

    return config;
  },
  (error) => Promise.reject(error),
);

// ── Response Interceptor ─────────────────────────────────
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // TODO: Xử lý 401 — tự động refresh token
    // TODO: Xử lý 403 — redirect trang không có quyền
    // TODO: Log lỗi theo môi trường (không log ở production)

    return Promise.reject(error);
  },
);

export { apiClient };
