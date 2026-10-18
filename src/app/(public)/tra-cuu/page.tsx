// (public)/tra-cuu/page.tsx — Trang tra cứu tiến độ hồ sơ
// TODO: Implement form tra cứu + bảng kết quả

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tra cứu tiến độ hồ sơ',
  description: 'Tra cứu tình trạng xử lý hồ sơ theo mã hồ sơ hoặc số CCCD.',
};

export default function TraCuuPage() {
  return (
    <section aria-labelledby="tra-cuu-heading">
      <h1 id="tra-cuu-heading">Tra cứu tiến độ hồ sơ</h1>
      {/*
       * TODO: Tích hợp component form tra cứu.
       * Gợi ý: Dùng feature module riêng tại src/features/lookup/
       *   - LookupSearchForm (nhập mã hồ sơ / CCCD)
       *   - LookupResultTable (hiển thị trạng thái)
       */}
    </section>
  );
}
