/**
 * search.service.ts — Service tầng gọi API cho nghiệp vụ tra cứu
 * Đóng gói Class + Factory Singleton Pattern.
 */

import { apiClient } from '@/lib/api/axiosClient';
import { API_CONSTANTS } from '@/constants/api-constants';
import type { TraCuuDto } from '@/models/tra-cuu/tra-cuu-dto';

// Interface nội bộ — KHÔNG export
interface ISearchService {
  getData(): Promise<TraCuuDto[]>;
}

// Class thực thi nội bộ — KHÔNG export
class SearchService implements ISearchService {
  async getData(): Promise<TraCuuDto[]> {
    const response = await apiClient.get<TraCuuDto[]>(API_CONSTANTS.TRA_CUU.GET_DATA);
    return response.data;
  }
}

// Biến lưu Singleton instance
let searchServiceInstance: ISearchService | null = null;

/**
 * Factory Singleton: Chỉ export hàm này để lấy instance service duy nhất
 */
export const getSearchService = (): ISearchService => {
  if (!searchServiceInstance) {
    searchServiceInstance = new SearchService();
  }
  return searchServiceInstance;
};
