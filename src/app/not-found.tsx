// not-found.tsx — Trang 404 toàn cục
// TODO: Thiết kế UI 404 theo brand guideline

import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center gap-4 p-8"
    >
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted">Trang bạn tìm kiếm không tồn tại.</p>
      {/* TODO: Thêm illustration và các liên kết hữu ích */}
      <Link href="/" className="text-primary underline hover:no-underline">
        Về trang chủ
      </Link>
    </main>
  );
}
