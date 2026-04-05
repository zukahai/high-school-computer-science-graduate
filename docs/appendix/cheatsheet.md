# Tóm Tắt Nhanh – Cheat Sheet

> Ôn lại toàn bộ nội dung thi trong một trang — **đọc ngay trước khi vào phòng thi!**

---

## 🌐 Chương 2 – Mạng Máy Tính & Internet

### Thiết bị mạng

| Thiết bị | Chức năng | Địa chỉ dùng | Tầng OSI |
|---|---|---|---|
| **Hub** | Khuếch đại, phát tán tín hiệu ra tất cả cổng | Không | Tầng 1 |
| **Switch** | Kết nối thiết bị **trong LAN**, chuyển đúng cổng | MAC address | Tầng 2 |
| **Router** | Kết nối **các mạng khác nhau** (LAN ↔ WAN) | IP address | Tầng 3 |
| **Modem** | Chuyển đổi tín hiệu số ↔ analog/quang | — | Tầng 1 |
| **Access Point** | Phát sóng Wi-Fi | MAC | Tầng 2 |

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

### Mô hình OSI – 7 tầng

| Tầng | Tên | Giao thức / Thiết bị | Đơn vị |
|---|---|---|---|
| 7 | Application (Ứng dụng) | HTTP, HTTPS, FTP, SMTP, DNS | Data |
| 6 | Presentation (Trình bày) | SSL/TLS, JPEG, MP4 | Data |
| 5 | Session (Phiên) | NetBIOS, RPC | Data |
| 4 | Transport (Vận chuyển) | TCP, UDP | Segment |
| 3 | Network (Mạng) | IP, Router | Packet |
| 2 | Data Link (Liên kết DL) | Ethernet, Switch | Frame |
| 1 | Physical (Vật lý) | Cáp, sóng, Hub | Bit |

**Mẹo nhớ thứ tự:** "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing" (7→1)

### Internet & Dịch vụ

| Giao thức | Cổng | Chức năng |
|---|---|---|
| HTTP | 80 | Truyền trang web (không mã hóa) |
| HTTPS | 443 | HTTP + mã hóa SSL/TLS |
| FTP | 21 | Truyền file |
| SMTP | 25 | **Gửi** email |
| POP3 | 110 | **Nhận** email (tải về, xóa server) |
| IMAP | 143 | **Nhận** email (đồng bộ, giữ server) |
| DNS | 53 | Dịch tên miền → địa chỉ IP |

**Internet ≠ WWW:** WWW (World Wide Web) là một dịch vụ trên Internet, dùng HTTP/HTTPS.

### Bảo mật mạng

| Loại Malware | Đặc điểm |
|---|---|
| **Virus** | Cần file chủ, lây lan khi chạy file |
| **Worm** | Tự lây lan qua mạng, không cần file chủ |
| **Trojan** | Giả dạng phần mềm hợp lệ để xâm nhập |
| **Ransomware** | Mã hóa dữ liệu, đòi tiền chuộc |
| **Spyware** | Theo dõi, thu thập dữ liệu lén lút |

**Biện pháp bảo vệ:** Firewall · Antivirus · Mã hóa (HTTPS, SSL/TLS) · 2FA · Cập nhật phần mềm

### Phân loại mạng

| Loại | Phạm vi | Ví dụ |
|---|---|---|
| **PAN** | < 10m (cá nhân) | Bluetooth tai nghe, smartwatch |
| **LAN** | Tòa nhà / khu vực | Mạng trường học, văn phòng |
| **MAN** | Thành phố | Mạng cáp quang đô thị |
| **WAN** | Toàn cầu | Internet |

**Topology phổ biến:** Star (hình sao) — phổ biến nhất vì dễ quản lý, lỗi một dây không ảnh hưởng toàn mạng.

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

### Machine Learning

| Loại | Cách học | Ví dụ |
|---|---|---|
| **Học có giám sát** | Dữ liệu có nhãn (input + đáp án) | Phân loại email spam, nhận diện ảnh |
| **Học không giám sát** | Dữ liệu không có nhãn | Gom nhóm khách hàng (clustering) |
| **Học tăng cường** | Thử sai, nhận thưởng/phạt | AlphaGo, xe tự lái |

**Deep Learning** = Machine Learning dùng mạng nơ-ron nhiều tầng ẩn → nhận diện ảnh, giọng nói.

### AI trong Giáo dục

| Tích cực | Tiêu cực |
|---|---|
| Học 24/7 không giới hạn | Gian lận, nhờ AI làm thay |
| Cá nhân hóa nội dung | Phụ thuộc, mất kỹ năng tự suy nghĩ |
| Hỗ trợ giáo viên | Thông tin sai (hallucination) |
| Dân chủ hóa học liệu | Khoảng cách số giàu–nghèo |

**Fact-checking:** Xác minh thông tin AI qua ≥2 nguồn độc lập uy tín trước khi dùng.

### Đạo đức AI

| Vấn đề | Giải thích |
|---|---|
| **AI Bias (Thiên kiến)** | Dữ liệu huấn luyện có lỗi → AI phân biệt đối xử |
| **Quyền riêng tư** | AI thu thập dữ liệu người dùng để huấn luyện |
| **Explainability** | "Hộp đen" — khó giải thích tại sao AI đưa ra quyết định |
| **Deepfake** | Video/ảnh giả mạo người thật bằng AI |
| **Trách nhiệm** | Ai chịu trách nhiệm khi AI gây hại? |

### AI và Xã hội

- **Tác động việc làm:** AI thay thế công việc lặp lại (kế toán, tổng đài...), tạo ra việc làm mới (AI trainer, data scientist...)
- **Digital Divide:** Khoảng cách công nghệ giữa người giàu/nghèo, nước phát triển/đang phát triển
- **Echo Chamber:** Thuật toán mạng xã hội chỉ cho xem nội dung phù hợp quan điểm → cực đoan hóa

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
SELECT cot1, cot2 FROM TenBang WHERE dieu_kien ORDER BY cot ASC;

-- Các toán tử WHERE hay gặp
WHERE Diem > 8
WHERE Diem BETWEEN 7 AND 9
WHERE HoTen LIKE 'Nguyễn%'
WHERE MaLop IN ('L10A', '10B')
WHERE Diem >= 8 AND MaMon = 'TOAN'

-- Kết hợp 2 bảng (chỉ hàng khớp cả hai)
SELECT hs.HoTen, dt.Diem
FROM HocSinh hs
INNER JOIN DiemThi dt ON hs.MaHS = dt.MaHS;

-- LEFT JOIN: tất cả hàng bảng trái, kể cả không khớp
SELECT hs.HoTen, dt.Diem
FROM HocSinh hs
LEFT JOIN DiemThi dt ON hs.MaHS = dt.MaHS;
```

### DDL – Định nghĩa cấu trúc

```sql
-- Tạo bảng
CREATE TABLE HocSinh (
    MaHS  INT          PRIMARY KEY,
    HoTen VARCHAR(100) NOT NULL,
    MaLop VARCHAR(10)  REFERENCES Lop(MaLop)
);

-- Thêm cột
ALTER TABLE HocSinh ADD Email VARCHAR(100);

-- Xóa cột
ALTER TABLE HocSinh DROP COLUMN Email;

-- Xóa bảng (cả cấu trúc + dữ liệu)
DROP TABLE HocSinh;

-- Xóa toàn bộ dữ liệu, giữ cấu trúc
TRUNCATE TABLE HocSinh;
```

### DML – Thao tác dữ liệu

```sql
-- Thêm dữ liệu
INSERT INTO HocSinh (MaHS, HoTen, MaLop) VALUES (1, 'An', '10A');

-- Sửa dữ liệu (LUÔN CÓ WHERE!)
UPDATE DiemThi SET Diem = 9.5 WHERE MaHS = 1 AND MaMon = 'TOAN';

-- Xóa dữ liệu (LUÔN CÓ WHERE!)
DELETE FROM HocSinh WHERE MaHS = 5;
```

### SQL Nâng cao

```sql
-- Hàm tổng hợp
SELECT COUNT(*), SUM(Diem), AVG(Diem), MAX(Diem), MIN(Diem) FROM DiemThi;

-- Đếm theo nhóm
SELECT MaLop, COUNT(*) AS SoHS FROM HocSinh GROUP BY MaLop;

-- Lọc nhóm (dùng HAVING, không phải WHERE)
SELECT MaLop, COUNT(*) AS SoHS FROM HocSinh GROUP BY MaLop HAVING COUNT(*) > 30;

-- Loại bỏ trùng lặp
SELECT DISTINCT MaLop FROM HocSinh;

-- Giới hạn số hàng
SELECT * FROM HocSinh ORDER BY HoTen LIMIT 10;
```

**Nhóm lệnh SQL:**

| Nhóm | Lệnh |
|---|---|
| **DDL** | CREATE, ALTER, DROP, TRUNCATE |
| **DML** | INSERT, UPDATE, DELETE |
| **DQL** | SELECT |

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
| `<strong>` | In **đậm** |
| `<em>` | In *nghiêng* |
| `<ul>` / `<ol>` | Danh sách không/có thứ tự |
| `<li>` | Mục trong danh sách |
| `<table>` | Bảng dữ liệu |
| `<tr>` / `<th>` / `<td>` | Hàng / ô tiêu đề / ô dữ liệu |
| `<a href="...">` | Liên kết |
| `<img src="..." alt="...">` | Hình ảnh |
| `<form>` | Biểu mẫu nhập liệu |
| `<input type="...">` | Ô nhập liệu (text, password, checkbox, radio...) |

**colspan / rowspan:**
- `<td colspan="2">` — ô chiếm 2 cột ngang
- `<td rowspan="2">` — ô chiếm 2 hàng dọc

**Liên kết đặc biệt:**
- `<a href="https://...">` — liên kết ngoài
- `<a href="#id">` — liên kết neo trong trang
- `<a href="mailto:email@example.com">` — gửi email
- `target="_blank"` — mở tab mới

### Thẻ ngữ nghĩa (Semantic HTML)

| Thẻ | Ý nghĩa |
|-----|---------|
| `<header>` | Phần đầu trang / bài viết |
| `<nav>` | Menu điều hướng |
| `<main>` | Nội dung chính của trang |
| `<section>` | Một phần / chủ đề trong trang |
| `<article>` | Nội dung độc lập (bài blog, tin tức) |
| `<aside>` | Nội dung phụ / thanh bên |
| `<footer>` | Phần chân trang |

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
padding: 10px;              /* Khoảng cách bên trong */
margin: 20px;               /* Khoảng cách bên ngoài */
```

**3 cách nhúng CSS:**
1. **Inline:** `<p style="color:red;">` — ít dùng
2. **Internal:** `<style>` trong `<head>` — bài tập nhỏ
3. **External:** `<link rel="stylesheet" href="style.css">` — **chuẩn chuyên nghiệp**

**Box model:** `content → padding → border → margin`

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

### Luật An ninh mạng & Bản quyền

**Luật An ninh mạng Việt Nam 2018** – các hành vi bị cấm:
- Đăng thông tin sai sự thật, vu khống, xúc phạm danh dự người khác
- Phát tán phần mềm độc hại, tấn công hạ tầng mạng
- Lừa đảo, chiếm đoạt tài khoản, dữ liệu trái phép

**Giấy phép phần mềm:**
| Loại | Đặc điểm |
|---|---|
| **Freeware** | Miễn phí dùng, không có mã nguồn |
| **Open Source** | Mã nguồn công khai (không nhất thiết miễn phí) |
| **GPL** | Open source, sản phẩm phái sinh phải cùng giấy phép GPL |
| **MIT** | Open source tự do, có thể dùng trong dự án thương mại |
| **Proprietary** | Phần mềm thương mại, phải mua bản quyền |

**Vi phạm bản quyền = Bẻ khóa, crack, dùng phần mềm không có giấy phép** → Bị xử phạt hành chính hoặc hình sự.

### Quyền riêng tư & Sức khỏe

**Dữ liệu cá nhân:** họ tên, CCCD, email, số điện thoại, địa chỉ, vị trí GPS, dữ liệu y tế...

**Quyền của người dùng:** Quyền truy cập · Quyền chỉnh sửa · Quyền xóa (quyền bị quên) · Quyền phản đối xử lý

**Ergonomics – Tư thế đúng khi dùng máy tính:**
- Khoảng cách mắt – màn hình: **50–70 cm**
- Màn hình ngang tầm mắt hoặc thấp hơn 15–20°
- Lưng thẳng, bàn chân đặt phẳng sàn
- Nghỉ mắt: quy tắc **20-20-20** (mỗi 20 phút, nhìn vật cách 20 feet trong 20 giây)

### Nghề IT

| Vị trí | Làm gì | Kỹ năng cần |
|---|---|---|
| **Kỹ sư phần cứng** | Thiết kế chip, bo mạch, linh kiện | Điện tử, vật lý, toán |
| **Kỹ sư phần mềm** | Viết code, ứng dụng, website | Lập trình, giải thuật |
| **Quản trị mạng** | Duy trì hạ tầng mạng, bảo mật | Mạng, hệ thống, bảo mật |
| **Kỹ sư AI/Data** | Xây dựng mô hình AI, phân tích dữ liệu | Toán thống kê, ML, Python |
| **Nhà thiết kế UX/UI** | Thiết kế giao diện, trải nghiệm người dùng | Thiết kế, tâm lý người dùng |

---

## ⚡ 54 Điểm Ghi Nhớ Nhanh Nhất

**Chương 2 – Mạng:**
1. Switch → **MAC** → Tầng 2
2. Router → **IP** → Tầng 3
3. Modem → **chuyển đổi tín hiệu** → kết nối ISP
4. TCP → **tin cậy** (ACK, gửi lại)
5. UDP → **nhanh** (game, video call)
6. IPv4 → **32 bit** → `x.x.x.x`
7. `192.168.x.x` → **Private IP** (nội bộ)
8. OSI có **7 tầng**: Phy → DL → Net → Trans → Ses → Pres → App (1→7)
9. HTTP=80, HTTPS=443, SMTP=25, DNS=53
10. SMTP **gửi** mail; POP3/IMAP **nhận** mail
11. Virus cần **file chủ**; Worm **tự lây** qua mạng
12. Phishing = giả mạo email/trang web để lừa lấy thông tin
13. **PAN < LAN < MAN < WAN**
14. **Star topology** phổ biến nhất hiện nay

**Chương 3 – AI:**
15. AI hiện tại = **AI yếu** (1 lĩnh vực)
16. **Hallucination** = AI bịa thông tin tự tin
17. NLP ≠ chỉ dịch thuật; NLP bao gồm chatbot, phân tích cảm xúc...
18. Machine Learning = dạy máy học từ **dữ liệu**
19. Học có giám sát = có **nhãn** (label); không giám sát = không có nhãn
20. Deep Learning = ML dùng **mạng nơ-ron** nhiều tầng
21. AI Bias = **dữ liệu xấu → kết quả phân biệt đối xử**
22. Deepfake = **video/ảnh giả mạo** người thật bằng AI
23. Digital Divide = **khoảng cách** tiếp cận công nghệ

**Chương 4 – SQL:**
24. CSDL = kho dữ liệu; **DBMS** = phần mềm quản lý
25. Primary Key → **Unique + Not Null**
26. Composite PK = **2+ cột kết hợp**
27. Foreign Key → tham chiếu PK bảng khác
28. `SELECT * FROM Bảng WHERE điều_kiện`
29. `INNER JOIN` → chỉ hàng **khớp cả hai bảng**
30. `LEFT JOIN` → **tất cả** hàng bảng trái
31. DDL = CREATE/ALTER/DROP (cấu trúc); DML = INSERT/UPDATE/DELETE (dữ liệu)
32. `DROP TABLE` xóa cả **cấu trúc**; `TRUNCATE` chỉ xóa **dữ liệu**
33. `WHERE` lọc **hàng**; `HAVING` lọc **nhóm** (sau GROUP BY)
34. `UPDATE` và `DELETE` **LUÔN CẦN WHERE!**

**Chương 5 – HTML/CSS:**
35. HTML = **HyperText Markup Language** (không phải ngôn ngữ lập trình)
36. `<head>` = thông tin ẩn; `<body>` = nội dung hiển thị
37. `<ul>` = **không** thứ tự; `<ol>` = **có** thứ tự
38. `<th>` = ô tiêu đề (đậm); `<td>` = ô dữ liệu
39. `colspan` = gộp cột; `rowspan` = gộp hàng
40. `<a target="_blank">` = mở tab mới
41. `<img alt="...">` = văn bản thay thế ảnh (accessibility)
42. `<input type="password">` ẩn ký tự nhập
43. Thẻ ngữ nghĩa: header, nav, main, section, article, footer
44. Box model: **content → padding → border → margin**
45. CSS: `selector { thuộc-tính: giá-trị; }`
46. External CSS là cách **chuyên nghiệp** nhất

**Chương 6 – Đạo đức:**
47. **Netiquette** = Network + Etiquette
48. **Cyberbullying** = cố ý + lặp lại + gây hại qua thiết bị số
49. Ẩn danh ≠ vô trách nhiệm (IP có thể truy ra)
50. **White Hat** = ethical hacker (hợp pháp)
51. CIA Triad: **C**onfidentiality + **I**ntegrity + **A**vailability
52. Mật khẩu mạnh: ≥12 ký tự, hoa+thường+số+ký tự đặc biệt
53. **GPL**: sản phẩm phái sinh phải cùng giấy phép; **MIT**: tự do hơn
54. Ergonomics: mắt – màn hình **50–70 cm**; nghỉ mắt **20-20-20**

