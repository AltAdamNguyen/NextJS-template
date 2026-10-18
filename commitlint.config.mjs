// commitlint.config.mjs
// Quy tắc chuẩn hóa Git commit message theo Conventional Commits.
//
// Format hợp lệ:  <type>: <subject>
// Ví dụ:          feat: thêm trang tra cứu tiến độ
//                 fix: sửa lỗi upload ảnh OCR

/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Giới hạn type cho phép
    'type-enum': [
      2, // level: error
      'always',
      ['feat', 'fix', 'update', 'refactor', 'docs', 'chore'],
    ],
    // Bắt buộc có type
    'type-empty': [2, 'never'],
    // Bắt buộc có subject (nội dung mô tả)
    'subject-empty': [2, 'never'],
    // Subject không được kết thúc bằng dấu chấm
    'subject-full-stop': [2, 'never', '.'],
    // Không ép buộc case cho subject (hỗ trợ tiếng Việt)
    'subject-case': [0],
    // Header tối đa 100 ký tự
    'header-max-length': [2, 'always', 100],
  },
};

export default config;
