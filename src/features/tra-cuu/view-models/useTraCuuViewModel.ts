'use client';

/**
 * useTraCuuViewModel.ts — ViewModel quản lý state và logic cho màn hình Tra cứu
 */

import { useState, useCallback } from 'react';
import type { TraCuuDto } from '@/models/tra-cuu/tra-cuu-dto';
import { getSearchService } from '@/services/tra-cuu/search.service';

export function useTraCuuViewModel() {
  const [data, setData] = useState<TraCuuDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchService = getSearchService();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await searchService.getData();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra khi tra cứu');
    } finally {
      setLoading(false);
    }
  }, [searchService]);

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
