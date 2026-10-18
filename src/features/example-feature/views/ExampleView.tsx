'use client';

/**
 * ExampleView.tsx — [View Layer] Component UI stub
 *
 * MVVM Rule: View CHỈ render UI. Không chứa state tự quản lý
 * hay logic nghiệp vụ. Mọi data/action đến từ ViewModel hook.
 *
 * TODO: Thay "Example" bằng tên View thực tế
 */

import { useExampleViewModel } from '../view-models/useExampleViewModel';

export default function ExampleView() {
  const {
    data,
    isLoading,
    error,
    fetchData,
    reset,
  } = useExampleViewModel();

  // ── Loading state ──────────────────────────
  if (isLoading) {
    return (
      <div role="status" aria-live="polite" aria-label="Đang tải dữ liệu...">
        {/* TODO: Thay bằng Skeleton component */}
        <p>Đang tải...</p>
      </div>
    );
  }

  // ── Error state ────────────────────────────
  if (error) {
    return (
      <div role="alert" aria-live="assertive">
        {/* TODO: Thay bằng ErrorAlert component */}
        <p>{error}</p>
        <button type="button" onClick={reset}>
          Thử lại
        </button>
      </div>
    );
  }

  // ── Main render ────────────────────────────
  return (
    <div>
      {/* TODO: Implement UI hiển thị data */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Chưa có dữ liệu.</p>
      )}

      {/* TODO: Thêm form, danh sách, hoặc các UI element phù hợp */}
      <button
        type="button"
        id="example-fetch-btn"
        onClick={() => fetchData('example-id')}
      >
        Tải dữ liệu mẫu
      </button>
    </div>
  );
}
