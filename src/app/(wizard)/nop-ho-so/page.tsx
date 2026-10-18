// (wizard)/nop-ho-so/page.tsx — Trang nộp hồ sơ trực tuyến (thin page)
// Đây là "thin page" — chỉ import và render feature View, không chứa logic.
// TODO: Xác định bước hiện tại và truyền vào Stepper context

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nộp hồ sơ trực tuyến',
  description: 'Điền thông tin và nộp hồ sơ hành chính công trực tuyến.',
};

export default function NopHoSoPage() {
  return (
    <section aria-labelledby="nop-ho-so-heading">
      <h1 id="nop-ho-so-heading" className="sr-only">
        Nộp hồ sơ trực tuyến
      </h1>
      {/*
       * TODO: Import và render View từ feature module.
       * Ví dụ:
       *   import { OcrScanView } from '@/features/ocr-identity/views/OcrScanView';
       *   <OcrScanView />
       *
       * Mỗi bước wizard là 1 View tương ứng với 1 feature.
       */}
    </section>
  );
}
