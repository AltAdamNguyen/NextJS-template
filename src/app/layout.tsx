import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

// TODO: Cấu hình font chính theo brand guideline của dự án
const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-sans',
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// TODO: Cập nhật metadata đầy đủ (OG image, keywords, canonical URL)
export const metadata: Metadata = {
  title: {
    default: 'Cổng Dịch Vụ Công Trực Tuyến',
    template: '%s | Cổng Dịch Vụ Công',
  },
  description: 'Nộp hồ sơ và tra cứu tiến độ hồ sơ hành chính công trực tuyến.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" dir="ltr" className={beVietnamPro.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* TODO: Thêm Providers (QueryClient, ThemeProvider, ...) bọc ngoài children */}
        {children}
      </body>
    </html>
  );
}
