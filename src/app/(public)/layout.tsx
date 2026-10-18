// (public)/layout.tsx — Layout dùng chung cho nhóm trang công cộng
// Áp dụng cho: trang chủ, tra cứu, hướng dẫn, ...
// TODO: Thêm Header, Footer, Breadcrumb vào đây

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: <Header /> */}
      <main id="main-content">
        {children}
      </main>
      {/* TODO: <Footer /> */}
    </>
  );
}
