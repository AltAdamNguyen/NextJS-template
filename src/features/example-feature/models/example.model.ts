/**
 * example.model.ts — [Model Layer] Types & Interfaces stub
 *
 * MVVM Rule: Model chỉ định nghĩa cấu trúc dữ liệu (DTO, Interface, Enum, Schema).
 * KHÔNG chứa logic UI, state management, hay side-effect.
 *
 * TODO: Thay "Example" bằng tên nghiệp vụ thực tế (ví dụ: Application, Profile, ...)
 */

// ── Enums ───────────────────────────────────────────────

// TODO: Định nghĩa enum trạng thái của entity
export enum ExampleStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  // TODO: Thêm các trạng thái nghiệp vụ
}

// ── Request DTOs (Client → Server) ──────────────────────

// TODO: Định nghĩa payload gửi lên server
export interface ExampleRequestDto {
  // TODO: Thêm các trường dữ liệu
  id?: string;
}

// ── Response DTOs (Server → Client) ─────────────────────

// TODO: Định nghĩa cấu trúc response từ server
export interface ExampleResponseDto {
  // TODO: Thêm các trường dữ liệu
  id: string;
  status: ExampleStatus;
  createdAt: string;
}

// ── Validation Schema ────────────────────────────────────

// TODO: Định nghĩa Zod schema để validate form input
// Ví dụ:
// import { z } from 'zod';
// export const ExampleFormSchema = z.object({ ... });
// export type ExampleFormValues = z.infer<typeof ExampleFormSchema>;
