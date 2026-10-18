/**
 * socketClient.ts — Placeholder cho kết nối Socket / SignalR (stub)
 *
 * TODO: Implement kết nối thực tế cho tính năng AI Chatbot real-time
 * TODO: Chọn thư viện phù hợp:
 *   - @microsoft/signalr (nếu backend .NET)
 *   - socket.io-client (nếu backend Node.js)
 *   - WebSocket native API (nếu backend thuần WebSocket)
 *
 * Tài liệu SignalR: https://learn.microsoft.com/en-us/aspnet/core/signalr/javascript-client
 */

// TODO: import * as signalR from '@microsoft/signalr';

export type SocketMessageHandler = (data: unknown) => void;

/**
 * TODO: Implement — Kết nối tới Socket/SignalR Hub
 * @param hubUrl - URL của Hub endpoint
 * @param accessTokenFactory - Factory function lấy access token
 */
export async function connectSocket(
  hubUrl: string,
  accessTokenFactory?: () => string | Promise<string>,
): Promise<void> {
  // TODO: Implement kết nối với retry logic và fallback transport
  void hubUrl;
  void accessTokenFactory;
  console.warn('socketClient.connectSocket: chưa được implement');
}

/**
 * TODO: Implement — Ngắt kết nối Socket
 */
export async function disconnectSocket(): Promise<void> {
  // TODO: Implement
  console.warn('socketClient.disconnectSocket: chưa được implement');
}

/**
 * TODO: Implement — Lắng nghe sự kiện từ server
 */
export function onSocketEvent(event: string, handler: SocketMessageHandler): void {
  // TODO: Implement
  void event;
  void handler;
  console.warn(`socketClient.onSocketEvent("${event}"): chưa được implement`);
}

/**
 * TODO: Implement — Gửi sự kiện lên server
 */
export async function emitSocketEvent(event: string, data?: unknown): Promise<void> {
  // TODO: Implement
  void event;
  void data;
  console.warn(`socketClient.emitSocketEvent("${event}"): chưa được implement`);
}
