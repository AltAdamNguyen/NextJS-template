'use client';

/**
 * TraCuuView.tsx — Giao diện hiển thị tính năng Tra cứu hồ sơ
 * Tách biệt hoàn toàn logic nghiệp vụ (gọi qua useTraCuuViewModel).
 */

import { useTraCuuViewModel } from '../view-models/useTraCuuViewModel';
import { HoSoStatusEnum } from '@/enums/ho-so-status-enum';

function renderStatusText(status: number): string {
  switch (status) {
    case HoSoStatusEnum.ChoDuyet:
      return 'Chờ duyệt';
    case HoSoStatusEnum.DaDuyet:
      return 'Đã duyệt';
    case HoSoStatusEnum.TuChoi:
      return 'Từ chối';
    default:
      return 'Không xác định';
  }
}

export function TraCuuView() {
  const { data, loading, error, fetchData } = useTraCuuViewModel();

  return (
    <div className="tra-cuu-container">
      <div className="tra-cuu-actions">
        <button
          type="button"
          onClick={fetchData}
          disabled={loading}
          className="tra-cuu-button"
        >
          {loading ? 'Đang tải...' : 'Lấy danh sách hồ sơ'}
        </button>
      </div>

      {error && (
        <div role="alert" className="tra-cuu-error">
          {error}
        </div>
      )}

      {data.length > 0 ? (
        <ul className="tra-cuu-list">
          {data.map((item) => (
            <li key={item.id} className="tra-cuu-item">
              <span>Mã hồ sơ: {item.maHoSo}</span>
              <span> - Trạng thái: {renderStatusText(item.trangThai)}</span>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Chưa có dữ liệu tra cứu.</p>
      )}
    </div>
  );
}
