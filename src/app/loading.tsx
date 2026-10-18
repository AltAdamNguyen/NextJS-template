// loading.tsx — Root loading fallback (React Suspense)
// TODO: Thay thế bằng skeleton screen phù hợp với layout thực tế

export default function GlobalLoading() {
  return (
    <div
      role="status"
      aria-label="Đang tải trang..."
      aria-live="polite"
      className="flex min-h-screen items-center justify-center"
    >
      {/* TODO: Thay bằng spinner/skeleton component từ thư viện UI */}
      <p className="text-muted animate-pulse">Đang tải...</p>
    </div>
  );
}
