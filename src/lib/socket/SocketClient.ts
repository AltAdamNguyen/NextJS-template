/**
 * SocketClient.ts — Client quản lý kết nối WebSocket / SignalR dạng Class
 * Phục vụ cho tính năng Chatbot AI hoặc cập nhật tiến độ real-time.
 */

export class SocketClient {
  private url: string;
  private isConnected: boolean;

  constructor(url?: string) {
    this.url = url ?? process.env.NEXT_PUBLIC_SOCKET_URL ?? '';
    this.isConnected = false;
  }

  /**
   * Thiết lập kết nối socket
   */
  async connect(): Promise<void> {
    // TODO: Khởi tạo kết nối thực tế (@microsoft/signalr, socket.io-client hoặc WebSocket native)
    console.warn(`[SocketClient] Kết nối tới ${this.url}`);
    this.isConnected = true;
  }

  /**
   * Ngắt kết nối socket
   */
  async disconnect(): Promise<void> {
    // TODO: Hủy kết nối và dọn dẹp event listeners
    console.warn('[SocketClient] Đã ngắt kết nối');
    this.isConnected = false;
  }

  /**
   * Gửi thông điệp/sự kiện qua socket
   */
  async sendMessage(event: string, payload: unknown): Promise<void> {
    // TODO: Gửi message thực tế
    void event;
    void payload;
    console.warn(`[SocketClient] Gửi message qua event: ${event}`);
  }

  /**
   * Trạng thái kết nối hiện tại
   */
  get connected(): boolean {
    return this.isConnected;
  }
}
