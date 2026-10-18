/**
 * route-constants.ts — Định nghĩa các đường dẫn (routes) của ứng dụng
 * Tránh việc hardcode chuỗi URL ở nhiều nơi (magic strings).
 */

export const ROUTE_CONSTANTS = {
  HOME: '/',
  TRA_CUU: '/tra-cuu',
  NOP_HO_SO: '/nop-ho-so',
} as const;

export type RouteKey = keyof typeof ROUTE_CONSTANTS;
export type RoutePath = (typeof ROUTE_CONSTANTS)[RouteKey];
