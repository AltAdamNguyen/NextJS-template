/**
 * cipher.ts — Placeholder cho module mã hóa / ký số (stub)
 *
 * TODO: Implement AES-256-CBC encryption/decryption
 * TODO: Implement HMAC-SHA256 request signing
 * TODO: Tham khảo tài liệu tiêu chuẩn bảo mật Cấp độ 3
 *
 * Thư viện: crypto-js (đã cài sẵn)
 * Tài liệu: https://cryptojs.gitbook.io/docs
 */

// TODO: import CryptoJS from 'crypto-js';

/**
 * TODO: Implement — Mã hóa chuỗi plaintext bằng AES-256-CBC
 * @param plaintext - Dữ liệu cần mã hóa
 * @param secretKey - Khóa bí mật 32 ký tự
 * @returns Chuỗi mã hóa dạng "<iv_hex>:<ciphertext_base64>"
 */
export function encryptAES(plaintext: string, secretKey: string): string {
  // TODO: Implement
  void plaintext;
  void secretKey;
  throw new Error('encryptAES: chưa được implement');
}

/**
 * TODO: Implement — Giải mã chuỗi AES-256-CBC
 * @param payload - Chuỗi dạng "<iv_hex>:<ciphertext_base64>"
 * @param secretKey - Khóa bí mật
 * @returns Plaintext gốc
 */
export function decryptAES(payload: string, secretKey: string): string {
  // TODO: Implement
  void payload;
  void secretKey;
  throw new Error('decryptAES: chưa được implement');
}

/**
 * TODO: Implement — Tạo chữ ký HMAC-SHA256 cho HTTP request
 * @param method  - HTTP method (GET, POST, ...)
 * @param path    - Đường dẫn API (không bao gồm host)
 * @param body    - Body request (JSON string hoặc rỗng)
 * @param secretKey - HMAC secret key
 * @returns Object { signature, timestamp } để gắn vào header
 */
export function signRequest(
  method: string,
  path: string,
  body: string,
  secretKey: string,
): { signature: string; timestamp: string } {
  // TODO: Implement
  void method;
  void path;
  void body;
  void secretKey;
  throw new Error('signRequest: chưa được implement');
}
