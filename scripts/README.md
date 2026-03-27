# Replace Assets Path Script

Script JavaScript để thay thế tất cả đường dẫn `/assets/` thành đường dẫn custom trong các file HTML của VitePress.

## Tính năng

- ✅ Đọc tất cả file HTML trong thư mục đích
- ✅ Thay thế `/assets/` thành đường dẫn custom (ví dụ: `/docs/assets/`)
- ✅ Sử dụng Worker Threads để xử lý song song (concurrency)
- ✅ Hiển thị progress bar và thống kê
- ✅ Chỉ ghi file nếu có thay đổi
- ✅ Xử lý lỗi và báo cáo chi tiết

## Cách sử dụng

### 1. Chạy trực tiếp với Node.js

```bash
# Sử dụng mặc định (thay /assets/ thành /docs/assets/)
node scripts/replace-assets-path.js

# Sử dụng đường dẫn custom
node scripts/replace-assets-path.js --base-path "/my-docs"

# Chỉ định thư mục khác
node scripts/replace-assets-path.js --dir "build" --base-path "/custom/path"

# Tăng số worker threads
node scripts/replace-assets-path.js --workers 8

# Xem help
node scripts/replace-assets-path.js --help
```

### 2. Sử dụng npm scripts

```bash
# Chạy với cấu hình mặc định
npm run replace-assets

# Chạy với tham số custom
npm run replace-assets -- --base-path "/my-custom/path"
npm run replace-assets -- --workers 8
npm run replace-assets -- --dir "build"
```

### 3. Tích hợp vào deploy process

Script đã được tích hợp vào npm script `deploy`:

```bash
npm run deploy
```

Sẽ chạy theo thứ tự:
1. `docs:build` - Build VitePress
2. `replace-assets` - Thay thế đường dẫn assets
3. `gh-pages` - Deploy lên GitHub Pages

## Tham số

| Tham số | Mô tả | Mặc định |
|---------|-------|----------|
| `-d, --dir` | Thư mục chứa file HTML | `docs/.vitepress/dist` |
| `-b, --base-path` | Đường dẫn base để thay thế | `/docs` |
| `-w, --workers` | Số worker threads | `4` |
| `-h, --help` | Hiển thị help | - |

## Ví dụ Output

```
🔍 Scanning for HTML files in: C:\code\documentation-template\docs\.vitepress\dist
🔄 Replacing "/assets/" with "/docs/assets/"
⚡ Using 4 worker threads

Found 25 HTML file(s)

✓ algorithms\searching.html: Updated 3 asset path(s)
✓ algorithms\sorting.html: Updated 2 asset path(s)
✓ index.html: Updated 5 asset path(s)
Progress: 25/25 (100.0%)

📊 Summary:
  Total files: 25
  Successful: 25
  Errors: 0
  Duration: 0.15s

✅ All files processed successfully!
```

## Lưu ý

- Script sử dụng Worker Threads để xử lý song song, tăng tốc độ xử lý
- Chỉ ghi file khi có thay đổi để tối ưu performance
- An toàn với các file không phải HTML
- Có thể dừng bất cứ lúc nào với Ctrl+C
- Báo cáo chi tiết lỗi nếu có

## Requirements

- Node.js >= 10.5.0 (để hỗ trợ Worker Threads)
- Các dependency cơ bản của Node.js (fs, path, worker_threads)
