/**
 * components/ui/Modal.tsx — Stub
 *
 * TODO: Implement Modal/Dialog đầy đủ
 *   - Portal rendering (createPortal)
 *   - Focus trap
 *   - Đóng khi nhấn Escape hoặc click backdrop
 *   - WCAG: role="dialog", aria-modal, aria-labelledby
 */

'use client';

import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  // TODO: Thêm size, disableBackdropClose, description
}

// TODO: Implement đầy đủ với portal, focus trap, keyboard handler
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    // TODO: Dùng createPortal để render vào document.body
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      // TODO: Thêm className, backdrop, focus management
    >
      <h2 id="modal-title">{title}</h2>
      <button type="button" onClick={onClose} aria-label="Đóng">
        ✕
      </button>
      {/* TODO: Thêm backdrop overlay */}
      <div>{children}</div>
    </div>
  );
}
