/**
 * components/ui/Button.tsx — Stub
 *
 * TODO: Implement component Button đầy đủ
 *   - Variants: primary, secondary, outline, ghost, danger
 *   - Sizes: sm, md, lg
 *   - States: loading, disabled
 *   - WCAG: aria-busy, aria-disabled
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react';

// TODO: Mở rộng props theo thiết kế
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** TODO: Thêm variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** TODO: Thêm size */
  size?: 'sm' | 'md' | 'lg';
  /** TODO: Thêm loading state */
  isLoading?: boolean;
  children: ReactNode;
}

// TODO: Implement đầy đủ theo thiết kế
export function Button({ children, variant = 'primary', disabled, isLoading, ...props }: ButtonProps) {
  void variant;
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      // TODO: Thêm className động dựa trên variant/size
      className={props.className}
    >
      {/* TODO: Thêm spinner khi isLoading */}
      {children}
    </button>
  );
}
