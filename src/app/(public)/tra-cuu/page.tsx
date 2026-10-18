import type { Metadata } from 'next';
import { TraCuuView } from '@/features/tra-cuu/views/TraCuuView';

export const metadata: Metadata = {
  title: 'Tra cứu tiến độ hồ sơ',
  description: 'Tra cứu tình trạng xử lý hồ sơ theo mã hồ sơ hoặc số CCCD.',
};

export default function TraCuuPage() {
  return (
    <section aria-labelledby="tra-cuu-heading">
      <h1 id="tra-cuu-heading">Tra cứu tiến độ hồ sơ</h1>
      <TraCuuView />
    </section>
  );
}
