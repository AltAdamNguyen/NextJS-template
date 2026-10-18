/**
 * storage-constants.ts — Định nghĩa các key lưu trữ Cookie / LocalStorage / SessionStorage
 * Tránh việc phân mảnh và gõ nhầm key trong hệ thống.
 */

export const STORAGE_CONSTANTS = {
  AUTH_TOKEN: 'app_token',
  REFRESH_TOKEN: 'app_refresh_token',
  USER_PREFERENCES: 'app_preferences',
} as const;
