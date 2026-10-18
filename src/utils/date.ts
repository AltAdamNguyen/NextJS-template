/**
 * utils/date.ts — Tiện ích xử lý ngày tháng bằng Day.js (stub)
 *
 * Thư viện: dayjs (đã cài sẵn, siêu nhẹ ~2KB)
 * Tài liệu: https://day.js.org/docs
 *
 * TODO: Cài thêm plugins nếu cần:
 *   import relativeTime from 'dayjs/plugin/relativeTime';
 *   import timezone from 'dayjs/plugin/timezone';
 *   dayjs.extend(relativeTime);
 *   dayjs.extend(timezone);
 */

import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Locale tiếng Việt

// Đặt locale mặc định sang tiếng Việt
dayjs.locale('vi');

// TODO: Extend thêm plugins cần thiết (relativeTime, timezone, ...)

/**
 * Format ngày sang chuỗi DD/MM/YYYY (chuẩn hiển thị tiếng Việt)
 * @example formatDate('2024-01-15') → '15/01/2024'
 */
export function formatDate(date: string | Date | dayjs.Dayjs): string {
  return dayjs(date).format('DD/MM/YYYY');
}

/**
 * Format ngày giờ sang chuỗi DD/MM/YYYY HH:mm
 * @example formatDateTime('2024-01-15T08:30:00') → '15/01/2024 08:30'
 */
export function formatDateTime(date: string | Date | dayjs.Dayjs): string {
  return dayjs(date).format('DD/MM/YYYY HH:mm');
}

/**
 * TODO: Implement — Format thời gian tương đối ("3 phút trước")
 * Yêu cầu plugin: dayjs/plugin/relativeTime
 */
export function timeAgo(_date: string | Date): string {
  // TODO: Extend relativeTime plugin và implement
  // return dayjs(date).fromNow();
  void _date;
  return 'TODO: cài dayjs/plugin/relativeTime';
}

/**
 * Kiểm tra chuỗi ngày có hợp lệ không
 */
export function isValidDate(date: string): boolean {
  return dayjs(date).isValid();
}

/**
 * TODO: Implement — Tính số ngày còn lại đến hạn
 */
export function daysUntil(_targetDate: string): number {
  // TODO: return dayjs(targetDate).diff(dayjs(), 'day');
  void _targetDate;
  return 0;
}

export { dayjs };
