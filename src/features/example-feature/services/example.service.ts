/**
 * example.service.ts — [Model / Service Layer] API calls stub
 *
 * MVVM Rule: Service chỉ thực hiện HTTP call và trả về data.
 * KHÔNG quản lý state (loading, error), KHÔNG import UI component.
 *
 * TODO: Thay "example" bằng tên nghiệp vụ thực tế
 */

import { apiClient } from '@/lib/api/axiosClient';
import type { ExampleRequestDto, ExampleResponseDto } from '../models/example.model';

// TODO: Import endpoint thực tế từ config/api-endpoints.ts
const EXAMPLE_ENDPOINT = '/example';

/**
 * TODO: Implement — Lấy danh sách items
 */
export async function getExampleList(): Promise<ExampleResponseDto[]> {
  // TODO: Gọi API thực tế
  const response = await apiClient.get<ExampleResponseDto[]>(EXAMPLE_ENDPOINT);
  return response.data;
}

/**
 * TODO: Implement — Lấy chi tiết 1 item theo ID
 */
export async function getExampleById(id: string): Promise<ExampleResponseDto> {
  // TODO: Gọi API thực tế
  const response = await apiClient.get<ExampleResponseDto>(`${EXAMPLE_ENDPOINT}/${id}`);
  return response.data;
}

/**
 * TODO: Implement — Tạo mới item
 */
export async function createExample(payload: ExampleRequestDto): Promise<ExampleResponseDto> {
  // TODO: Gọi API thực tế
  const response = await apiClient.post<ExampleResponseDto>(EXAMPLE_ENDPOINT, payload);
  return response.data;
}

/**
 * TODO: Implement — Cập nhật item
 */
export async function updateExample(
  id: string,
  payload: ExampleRequestDto,
): Promise<ExampleResponseDto> {
  // TODO: Gọi API thực tế
  const response = await apiClient.put<ExampleResponseDto>(`${EXAMPLE_ENDPOINT}/${id}`, payload);
  return response.data;
}
