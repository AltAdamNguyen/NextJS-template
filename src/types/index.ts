/**
 * types/index.ts — Global shared TypeScript types (stub)
 *
 * TODO: Thêm types phù hợp với domain của dự án
 *   - ApiResponse wrapper
 *   - User/Auth types
 *   - Pagination types
 *   - Common UI types (SelectOption, BreadcrumbItem, ...)
 */

// ── API Response Wrapper ─────────────────────────────────

/** Wrapper chuẩn cho mọi API response */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  // TODO: Thêm errors, meta (pagination), timestamp
}

/** Cấu trúc lỗi chuẩn từ server */
export interface ApiError {
  code: string;
  message: string;
  field?: string; // Trường bị lỗi (dùng cho form validation)
}

/** Metadata phân trang */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

// ── Common UI ────────────────────────────────────────────

/** Option dùng trong Select/Dropdown */
export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

// TODO: Thêm BreadcrumbItem, StepperStep, ...

// ── Environment ──────────────────────────────────────────

export type AppEnvironment = 'development' | 'staging' | 'uat' | 'production';
