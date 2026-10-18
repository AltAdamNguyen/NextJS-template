/**
 * components/ui/Input.tsx — Stub
 *
 * TODO: Implement component Input với label, error, hint, icon
 * TODO: WCAG: aria-invalid, aria-describedby, aria-required
 * TODO: Dùng forwardRef để tương thích react-hook-form
 */

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  /** TODO: Thêm label */
  label?: string;
  /** TODO: Thêm thông báo lỗi */
  error?: string;
  /** TODO: Thêm gợi ý */
  hint?: string;
}

// TODO: Implement đầy đủ — label, error message, icon slots
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, hint, id, ...props }, ref) {
    return (
      <div>
        {/* TODO: Render label */}
        {label && <label htmlFor={id}>{label}</label>}

        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          // TODO: Thêm aria-describedby khi có error/hint
          {...props}
        />

        {/* TODO: Render error */}
        {error && <p role="alert">{error}</p>}
        {/* TODO: Render hint */}
        {hint && !error && <p>{hint}</p>}
      </div>
    );
  },
);
