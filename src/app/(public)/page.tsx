// (public)/page.tsx — Trang chủ (Home)
// TODO: Implement UI trang chủ theo thiết kế

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Cổng dịch vụ công trực tuyến — Nộp hồ sơ và tra cứu nhanh chóng.',
};

export default function HomePage() {
  return (
    <section aria-labelledby="home-heading">
      <h1 id="home-heading">
        {/* TODO: Hero section — tiêu đề, mô tả, CTA buttons */}
        Cổng Dịch Vụ Công Trực Tuyến
      </h1>
      {/* TODO: Thêm các section: Dịch vụ nổi bật, Tra cứu nhanh, Tin tức */}
    </section>
  );
}
