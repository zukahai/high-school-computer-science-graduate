# Tóm Tắt Nhanh – Cheat Sheet

> Ôn lại toàn bộ nội dung thi trong một trang — **đọc ngay trước khi vào phòng thi!**

---

## 🌐 Chương 2 – Mạng Máy Tính & Internet

### Thiết bị mạng

| Thiết bị | Chức năng | Địa chỉ dùng | Tầng OSI |
|---|---|---|---|
| **Switch** | Kết nối thiết bị **trong LAN** | MAC address | Tầng 2 |
| **Router** | Kết nối **các mạng khác nhau** (LAN ↔ WAN) | IP address | Tầng 3 |
| **Modem** | Chuyển đổi tín hiệu số ↔ analog | — | — |
| **Access Point** | Phát sóng Wi-Fi | — | — |

**Luồng chuẩn:** `Internet → Modem → Router → Switch → Thiết bị`

### Địa chỉ mạng

| | MAC Address | IP Address (IPv4) |
|---|---|---|
| **Loại** | Vật lý (cố định) | Logic (có thể thay đổi) |
| **Dài** | 48 bit (6 cặp hex) | 32 bit (4 octet 0–255) |
| **Ví dụ** | `A4:C3:F0:85:AC:5D` | `192.168.1.10` |
| **Phạm vi** | Chỉ trong LAN | LAN + Internet |
| **Dùng bởi** | Switch | Router |

**Private IP (nội bộ):** `10.x.x.x` · `172.16–31.x.x` · `192.168.x.x`

### TCP vs UDP

| | TCP | UDP |
|---|---|---|
| **Kết nối** | Có (3-way handshake) | Không |
| **ACK** | Có | Không |
| **Gửi lại nếu mất** | Có | Không |
| **Tốc độ** | Chậm hơn | Nhanh hơn |
| **Dùng cho** | Web, email, file, ngân hàng | Game, video call, DNS |

---

## 🤖 Chương 3 – Trí Tuệ Nhân Tạo (AI)

### Khái niệm cốt lõi

| Khái niệm | Định nghĩa ngắn |
|---|---|
| **AI** | Chương trình máy tính thực hiện nhiệm vụ đòi hỏi trí tuệ người |
| **NLP** | Xử lý ngôn ngữ tự nhiên — giúp máy hiểu và tạo ngôn ngữ người |
| **Nhận diện khuôn mặt** | Đo đặc điểm khuôn mặt → so sánh → xác định danh tính |
| **Hệ gợi ý** | Phân tích hành vi → đề xuất nội dung phù hợp |
| **Hallucination** | AI bịa thông tin sai nhưng trình bày tự tin |
| **AI yếu (Narrow AI)** | Chỉ giỏi 1 lĩnh vực — **tất cả AI hiện tại đều là AI yếu** |
| **AI mạnh (General AI)** | Suy nghĩ tổng quát như người — **chưa tồn tại** |

### AI trong Giáo dục

| Tích cực | Tiêu cực |
|---|---|
| Học 24/7 không giới hạn | Gian lận, nhờ AI làm thay |
| Cá nhân hóa nội dung | Phụ thuộc, mất kỹ năng tự suy nghĩ |
| Hỗ trợ giáo viên | Thông tin sai (hallucination) |
| Dân chủ hóa học liệu | Khoảng cách số giàu–nghèo |

**Fact-checking:** Xác minh thông tin AI qua ≥2 nguồn độc lập uy tín trước khi dùng.

---

## 🗄️ Chương 4 – Cơ Sở Dữ Liệu & SQL

### Khái niệm cơ bản

| Khái niệm | Định nghĩa |
|---|---|
| **CSDL (Database)** | Tập hợp dữ liệu có tổ chức, lưu trên máy tính |
| **DBMS** | Phần mềm quản lý CSDL (MySQL, PostgreSQL, SQLite...) |
| **Bảng (Table)** | Lưu dữ liệu dạng hàng và cột |
| **Primary Key (PK)** | Định danh **duy nhất** mỗi hàng; bắt buộc **Unique + Not Null** |
| **Foreign Key (FK)** | Cột tham chiếu đến PK bảng khác; đảm bảo toàn vẹn tham chiếu |
| **Composite PK** | Khóa chính từ **2+ cột** khi không có cột đơn đủ duy nhất |

### Câu lệnh SQL quan trọng

```sql
-- Lấy dữ liệu cơ bản
SELECT cot1, cot2 FROM TenBang WHERE dieu_kien;

-- Các toán tử WHERE hay gặp
WHERE Diem > 8
WHERE Diem BETWEEN 7 AND 9
WHERE HoTen LIKE 'Nguyễn%'
WHERE MaLop IN ('L10A', '10B')
WHERE Diem >= 8 AND MaMon = 'TOAN'

-- Kết hợp 2 bảng
SELECT hs.HoTen, dt.Diem
FROM HocSinh hs
INNER JOIN DiemThi dt ON hs.MaHS = dt.MaHS;

-- Sắp xếp kết quả
SELECT * FROM HocSinh ORDER BY HoTen ASC;

-- Đếm và nhóm
SELECT MaLop, COUNT(*) as SoHS FROM HocSinh GROUP BY MaLop;
```

---

## 🌍 Chương 5 – HTML & CSS

### Cấu trúc HTML bắt buộc

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Tiêu đề tab</title>
  </head>
  <body>
    <!-- Nội dung hiển thị ở đây -->
  </body>
</html>
```

### Thẻ HTML quan trọng

| Thẻ | Công dụng |
|-----|-----------|
| `<h1>`–`<h6>` | Tiêu đề (h1 lớn nhất) |
| `<p>` | Đoạn văn |
| `<ul>` / `<ol>` | Danh sách không/có thứ tự |
| `<li>` | Mục trong danh sách |
| `<table>` | Bảng dữ liệu |
| `<tr>` | Hàng trong bảng |
| `<th>` | Ô tiêu đề (đậm, căn giữa) |
| `<td>` | Ô dữ liệu |
| `<a href="...">` | Liên kết |
| `<img src="...">` | Hình ảnh |

**Bảng HTML:**
```html
<table>
  <tr><th>Tên</th><th>Điểm</th></tr>
  <tr><td>An</td><td>8.5</td></tr>
</table>
```

**colspan / rowspan:**
- `<td colspan="2">` — ô chiếm 2 cột ngang
- `<td rowspan="2">` — ô chiếm 2 hàng dọc

### CSS cơ bản

```css
/* Cú pháp */
selector { thuộc-tính: giá-trị; }

/* Selector thường dùng */
p { color: red; }           /* Theo tên thẻ */
.ten-class { ... }          /* Theo class */
#ten-id { ... }             /* Theo id */

/* Thuộc tính hay gặp */
color: red;                 /* Màu chữ */
background-color: yellow;   /* Màu nền */
font-size: 16px;            /* Cỡ chữ */
font-family: Arial;         /* Phông chữ */
border: 1px solid black;    /* Đường viền */
text-align: center;         /* Căn lề chữ */
```

**3 cách nhúng CSS:**
1. **Inline:** `<p style="color:red;">` — ít dùng
2. **Internal:** `<style>` trong `<head>` — bài tập nhỏ
3. **External:** `<link rel="stylesheet" href="style.css">` — **chuẩn chuyên nghiệp**

---

## ⚖️ Chương 6 – Đạo Đức & Nghề IT

### Văn hóa mạng (Netiquette) & Cyberbullying

**Netiquette** = "Network" + "Etiquette" = quy tắc ứng xử văn minh trên Internet.

**Các hình thức Cyberbullying:**
| Hình thức | Mô tả |
|---|---|
| **Harassment** | Quấy rối liên tục qua tin nhắn/bình luận |
| **Flaming** | Bình luận thô lỗ, kích động |
| **Outing** | Tiết lộ thông tin riêng tư trái phép |
| **Exclusion** | Loại trừ khỏi nhóm, cô lập online |
| **Impersonation** | Giả mạo danh tính người khác |
| **Trolling** | Đăng nội dung khiêu khích để gây tranh cãi |

**Khi bị bắt nạt:** Không phản ứng → Lưu bằng chứng → Block → Report → Nói với người lớn

### An Toàn Thông Tin

**CIA Triad:**
- **C – Confidentiality** (Bí mật): Chỉ người được phép mới đọc được
- **I – Integrity** (Toàn vẹn): Dữ liệu không bị thay đổi trái phép
- **A – Availability** (Sẵn sàng): Dữ liệu luôn truy cập được khi cần

**Phân loại Hacker:**
| Loại | Biệt danh | Hợp pháp? |
|---|---|---|
| **White Hat** | Ethical Hacker | ✅ Có |
| **Black Hat** | Cracker | ❌ Không |
| **Grey Hat** | — | ⚠️ Mập mờ |

**Mật khẩu mạnh:** ≥12 ký tự + HOA + thường + số + ký tự đặc biệt + không có nghĩa + khác nhau mỗi tài khoản

### Nghề IT

| Vị trí | Làm gì | Kỹ năng cần |
|---|---|---|
| **Kỹ sư phần cứng** | Thiết kế chip, bo mạch, linh kiện | Điện tử, vật lý, toán |
| **Kỹ sư phần mềm** | Viết code, ứng dụng, website | Lập trình, giải thuật |
| **Quản trị mạng** | Duy trì hạ tầng mạng, bảo mật | Mạng, hệ thống, bảo mật |
| **Kỹ sư AI/Data** | Xây dựng mô hình AI, phân tích dữ liệu | Toán thống kê, ML, Python |
| **Nhà thiết kế UX/UI** | Thiết kế giao diện, trải nghiệm người dùng | Thiết kế, tâm lý người dùng |

---

## ⚡ 30 Điểm Ghi Nhớ Nhanh Nhất

1. Switch → **MAC** → Tầng 2
2. Router → **IP** → Tầng 3
3. Modem → **chuyển đổi tín hiệu** → kết nối ISP
4. TCP → **tin cậy** (ACK, gửi lại)
5. UDP → **nhanh** (game, video call)
6. IPv4 → **32 bit** → `x.x.x.x`
7. `192.168.x.x` → **Private IP** (nội bộ)
8. AI hiện tại = **AI yếu** (1 lĩnh vực)
9. **Hallucination** = AI bịa thông tin tự tin
10. NLP ≠ chỉ dịch thuật; NLP bao gồm chatbot, phân tích cảm xúc...
11. CSDL = kho dữ liệu; **DBMS** = phần mềm quản lý
12. Primary Key → **Unique + Not Null**
13. Composite PK = **2+ cột kết hợp**
14. Foreign Key → tham chiếu PK bảng khác
15. `SELECT * FROM Bảng WHERE điều_kiện`
16. `INNER JOIN` → chỉ hàng **khớp cả hai bảng**
17. HTML = **HyperText Markup Language** (không phải ngôn ngữ lập trình)
18. `<head>` = thông tin ẩn; `<body>` = nội dung hiển thị
19. `<ul>` = **không** thứ tự (bullet); `<ol>` = **có** thứ tự (số)
20. `<li>` **phải nằm trong** `<ul>` hoặc `<ol>`
21. `<th>` = ô tiêu đề (đậm); `<td>` = ô dữ liệu
22. `colspan` = gộp cột; `rowspan` = gộp hàng
23. CSS: `selector { thuộc-tính: giá-trị; }`
24. **Netiquette** = Network + Etiquette
25. **Cyberbullying** = cố ý + lặp lại + gây hại qua thiết bị số
26. Ẩn danh ≠ vô trách nhiệm (IP có thể truy ra)
27. **White Hat** = ethical hacker (hợp pháp)
28. CIA Triad: **C**onfidentiality + **I**ntegrity + **A**vailability
29. Mật khẩu mạnh: ≥12 ký tự, hoa+thường+số+ký tự đặc biệt
30. Phishing = giả mạo email/trang web để lừa lấy thông tin
