/**
 * tra-cuu-dto.ts — Data Transfer Object cho tính năng Tra cứu hồ sơ
 */

export interface TraCuuDto {
  id: string;
  maHoSo: string;
  trangThai: number;
  tenThuTuc?: string;
  nguoiNop?: string;
  ngayNop?: string;
}
