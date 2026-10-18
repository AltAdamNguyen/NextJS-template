/**
 * config/site.ts — Cấu hình chung toàn site (stub)
 *
 * TODO: Bổ sung cấu hình theo thực tế của dự án
 *   - Thêm thông tin liên hệ, mạng xã hội
 *   - Thêm cấu hình phân trang mặc định
 *   - Thêm feature flags
 */

/** Cấu hình metadata và thông tin cơ bản của site */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Cổng Dịch Vụ Công',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  description: 'Nộp hồ sơ và tra cứu tiến độ hồ sơ hành chính công trực tuyến.',

  // TODO: Thêm thông tin liên hệ thực tế
  contact: {
    hotline: '1900 1800',
    email: 'hotro@dichvucong.gov.vn',
    address: '18 Nguyễn Du, Hai Bà Trưng, Hà Nội',
  },

  // TODO: Cập nhật feature flags theo yêu cầu
  features: {
    aiChatbot: process.env.NEXT_PUBLIC_APP_ENV !== 'production',
    ocrScan: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
