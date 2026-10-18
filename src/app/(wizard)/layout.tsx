// (wizard)/layout.tsx — Layout dùng chung cho nhóm trang wizard (luồng thao tác)
// Áp dụng cho: nộp hồ sơ, xác thực định danh, ký số, ...
// TODO: Thêm Stepper (thanh tiến trình) và điều hướng bước

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wizard-layout">
      {/* TODO: <WizardHeader /> — logo + nút thoát */}
      {/* TODO: <Stepper steps={...} currentStep={...} /> */}
      <main id="main-content" className="wizard-layout__body">
        {children}
      </main>
      {/* TODO: <WizardFooter /> — nút Quay lại / Tiếp theo */}
    </div>
  );
}
