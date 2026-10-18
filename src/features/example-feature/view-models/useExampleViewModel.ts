'use client';

/**
 * useExampleViewModel.ts — [ViewModel Layer] Custom Hook stub
 *
 * MVVM Rule: ViewModel quản lý state và điều phối logic nghiệp vụ.
 * - KHÔNG import JSX component hay className.
 * - KHÔNG trực tiếp gọi fetch — ủy thác cho Service.
 * - Trả về state + actions để View binding vào.
 *
 * TODO: Implement logic thực tế theo nghiệp vụ
 */

import { useState, useCallback } from 'react';
import type { ExampleResponseDto } from '../models/example.model';

// TODO: Định nghĩa đầy đủ return type cho hook
export interface UseExampleViewModelReturn {
  // State
  data: ExampleResponseDto | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchData: (id: string) => Promise<void>;
  reset: () => void;

  // TODO: Thêm state & actions phù hợp với nghiệp vụ
}

export function useExampleViewModel(): UseExampleViewModelReturn {
  // TODO: Khởi tạo state đầy đủ
  const [data, setData] = useState<ExampleResponseDto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement — Fetch data từ service
  const fetchData = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Gọi getExampleById(id) từ service
      console.log('TODO: fetch data for id', id);
      setData(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi không xác định.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // TODO: Implement — Reset state về giá trị ban đầu
  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { data, isLoading, error, fetchData, reset };
}
