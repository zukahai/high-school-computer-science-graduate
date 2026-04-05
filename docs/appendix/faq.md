# Câu Hỏi Thường Gặp (FAQ)

> Tổng hợp những câu hỏi học sinh hay thắc mắc khi ôn thi Tin học THPT

---

## 🌐 Chương 2 – Mạng Máy Tính

### ❓ Router và Modem khác nhau thế nào? Nhà tôi dùng một hộp — vậy là cái gì?

**Trả lời:**
- **Modem** chuyển đổi tín hiệu từ nhà mạng (VNPT/Viettel/FPT) thành tín hiệu số.
- **Router** phân phối kết nối Internet cho các thiết bị trong nhà, cấp địa chỉ IP nội bộ.

Hầu hết thiết bị gia đình hiện nay là **modem-router tích hợp** – hai chức năng trong một hộp. Trong bài thi, hãy phân biệt chúng theo **chức năng** chứ không phải hình dạng vật lý.

---

### ❓ Địa chỉ MAC và địa chỉ IP – cái nào quan trọng hơn?

**Trả lời:** Cả hai đều quan trọng, nhưng dùng ở tầng khác nhau:

| | MAC | IP |
|---|---|---|
| Tầng | Tầng 2 (Data Link) | Tầng 3 (Network) |
| Phạm vi | Chỉ trong LAN | LAN và Internet |
| Ai dùng | Switch | Router |
| Thay đổi được không | Không (về lý thuyết) | Có (DHCP cấp tự động) |

Trong đề thi thường hỏi phân biệt hai loại địa chỉ này — nhớ: **MAC = vật lý = Switch**, **IP = logic = Router**.

---

### ❓ TCP và UDP — khi nào dùng cái nào?

**Trả lời:**
- **TCP** khi dữ liệu cần **chính xác 100%**: web (HTTP/HTTPS), email, tải file, chuyển khoản ngân hàng.
- **UDP** khi cần **tốc độ thời gian thực** và chấp nhận mất một vài gói: video call, game online, DNS.

Mẹo nhớ: "**TCP = Tin Cậy Phải**" (phải đến đủ), "**UDP = Ưu tiên Độ nhanh**".

---

### ❓ IP 192.168.1.1 là của ai?

**Trả lời:** Thường là **địa chỉ IP của Router** trong mạng gia đình (gateway mặc định). Máy tính của bạn thường có IP 192.168.1.x (x từ 2 đến 254). Cả hai đều là **IP nội bộ (private IP)** — không phải IP công cộng trên Internet.

---

## 🤖 Chương 3 – Trí Tuệ Nhân Tạo

### ❓ AI "thông minh" đến mức nào? Có thể thay thế con người không?

**Trả lời:** AI hiện tại đều là **AI yếu (Narrow AI)** — rất giỏi trong **một lĩnh vực hẹp** (chơi cờ, nhận diện ảnh, dịch thuật...) nhưng không thể làm mọi việc như con người. **AI mạnh (General AI)** — loại có thể suy nghĩ tổng quát như người — chưa tồn tại trong thực tế.

Trong ngắn và trung hạn: AI sẽ **thay thế các công việc lặp đi lặp lại**, nhưng những việc cần **sáng tạo thật sự, cảm xúc, và đạo đức** vẫn cần con người.

---

### ❓ Hallucination của AI là gì? Ví dụ thực tế?

**Trả lời:** AI "ảo giác" khi nó **bịa ra thông tin không có thật** nhưng trình bày rất tự tin. Ví dụ:
- ChatGPT bịa ra tên sách, tên tác giả, năm xuất bản không tồn tại
- AI trả lời sai số liệu thống kê nhưng nghe rất đáng tin

**Nguyên nhân:** AI hoạt động bằng cách dự đoán từ tiếp theo có xác suất cao nhất — không phải tra cứu sự thật. Khi thiếu dữ liệu, nó tiếp tục "đoán" thay vì nói "Tôi không biết".

---

### ❓ NLP là gì? Có phải chỉ là dịch thuật không?

**Trả lời:** **Không** — NLP (Natural Language Processing) rộng hơn nhiều:
- **Dịch máy** (Google Dịch)
- **Phân tích cảm xúc** (nhận ra review tích cực/tiêu cực)
- **Chatbot** (hiểu câu hỏi của người dùng)
- **Tóm tắt văn bản**
- **Nhận dạng giọng nói** (Siri, Google Assistant)
- **Lọc thư rác** (phân loại email)

Dịch thuật chỉ là một ứng dụng nhỏ trong NLP.

---

## 🗄️ Chương 4 – Cơ Sở Dữ Liệu & SQL

### ❓ CSDL và DBMS khác nhau thế nào?

**Trả lời:**
- **CSDL (Database)** = kho dữ liệu (ví dụ: toàn bộ thông tin học sinh trường THPT X)
- **DBMS** = phần mềm quản lý kho đó (ví dụ: MySQL, PostgreSQL)

Ví dụ: MySQL là **DBMS** (phần mềm), còn database `school_db` bên trong MySQL mới là **CSDL**.

---

### ❓ Khi nào dùng khóa chính phức (composite primary key)?

**Trả lời:** Dùng khi **không có cột đơn nào đủ để định danh duy nhất** mỗi hàng.

Ví dụ điển hình: Bảng `DiemThi(MaHS, MaMon, Diem)` — một học sinh thi nhiều môn nên `MaHS` bị trùng; một môn có nhiều học sinh thi nên `MaMon` bị trùng. Chỉ **kết hợp (MaHS + MaMon)** mới tạo ra định danh duy nhất.

---

### ❓ Lệnh SQL SELECT * có vấn đề gì không?

**Trả lời:** Về mặt chức năng thì đúng — trả về tất cả cột. Nhưng trong thực tế:
- Tốn băng thông hơn (lấy cả cột không cần)
- Khó đọc và bảo trì code
- Nguy cơ lộ dữ liệu nhạy cảm

**Trong bài thi:** `SELECT *` vẫn được chấp nhận. Trong thực tế lập trình chuyên nghiệp, nên chỉ định tên cột cụ thể.

---

### ❓ INNER JOIN và JOIN khác nhau không?

**Trả lời:** `JOIN` và `INNER JOIN` là **giống nhau** — `INNER` là mặc định khi không ghi gì. Cả hai chỉ trả về hàng **có dữ liệu khớp ở cả hai bảng**.

Các loại JOIN khác:
- `LEFT JOIN` — trả về tất cả hàng bảng trái, kể cả khi không có khớp bên phải
- `RIGHT JOIN` — ngược lại
- Trong chương trình THPT, chỉ cần biết `INNER JOIN`

---

## 🌍 Chương 5 – HTML & CSS

### ❓ HTML có phải ngôn ngữ lập trình không?

**Trả lời:** **Không.** HTML là **ngôn ngữ đánh dấu (markup language)** — nó mô tả cấu trúc và nội dung, không có biến, vòng lặp, hay hàm. Ngôn ngữ lập trình thực sự cho web là **JavaScript**.

Bộ ba web frontend: **HTML** (cấu trúc) + **CSS** (trình bày) + **JavaScript** (hành vi).

---

### ❓ `<ul>` vs `<ol>` — khi nào dùng cái nào?

**Trả lời:**
- **`<ul>` (Unordered List):** Dùng khi **thứ tự không quan trọng** — danh sách sở thích, nguyên liệu, tính năng sản phẩm.
- **`<ol>` (Ordered List):** Dùng khi **thứ tự quan trọng** — hướng dẫn từng bước, các bước công thức nấu ăn, quy trình.

Mẹo nhớ: "ordered" = có trật tự = đánh số 1, 2, 3.

---

### ❓ `colspan` và `rowspan` trong bảng HTML là gì?

**Trả lời:**
- **`colspan="n"`** — một ô chiếm **n cột** theo chiều ngang.
- **`rowspan="n"`** — một ô chiếm **n hàng** theo chiều dọc.

Ví dụ: `<td colspan="3">` trong bảng 3 cột = ô đó chiếm toàn bộ chiều ngang hàng đó.

---

### ❓ Nên nhúng CSS theo cách nào?

**Trả lời:**

| Cách | Khi nào dùng |
|------|-------------|
| **Inline** `style="..."` | Chỉnh 1 phần tử nhanh, không khuyến khích dùng nhiều |
| **Internal** `<style>` trong `<head>` | Trang đơn lẻ, bài tập nhỏ |
| **External** file `.css` riêng | Dự án nhiều trang — **cách chuyên nghiệp** |

Trong bài thi thực hành, Internal hoặc Inline đều được chấp nhận.

---

## ⚖️ Chương 6 – Đạo Đức & Nghề IT

### ❓ Ẩn danh trên mạng có thể làm gì cũng được không?

**Trả lời:** **Không.** Dù bạn dùng tên giả, mỗi thiết bị kết nối Internet đều có **địa chỉ IP** được nhà mạng ghi lại. Cơ quan chức năng có thể yêu cầu các nền tảng (Facebook, Google) và nhà mạng cung cấp thông tin người dùng theo pháp luật.

**Luật An ninh mạng Việt Nam 2018** quy định rõ trách nhiệm pháp lý với hành vi vi phạm trên mạng, kể cả khi dùng tài khoản ảo.

---

### ❓ Cyberbullying có thể bị xử lý pháp lý không?

**Trả lời:** **Có.** Tùy theo mức độ:
- **Phạt hành chính:** Theo Nghị định 15/2020/NĐ-CP (sửa đổi bởi Nghị định 14/2022), vi phạm về thông tin sai sự thật, xúc phạm uy tín người khác có thể bị phạt đến 30 triệu đồng.
- **Truy cứu hình sự:** Nếu gây hậu quả nghiêm trọng (đe dọa tính mạng, xúc phạm danh dự nghiêm trọng) có thể bị truy cứu theo Bộ Luật Hình sự.

---

### ❓ Mật khẩu như thế nào là đủ mạnh?

**Trả lời:** Mật khẩu mạnh cần:
- ✅ **Ít nhất 12 ký tự** (càng dài càng tốt)
- ✅ Kết hợp **chữ HOA + chữ thường + số + ký tự đặc biệt** (!@#$%)
- ✅ **Không có nghĩa** — tránh tên, ngày sinh, từ trong từ điển
- ✅ **Khác nhau** cho mỗi tài khoản
- ❌ Tránh: `123456`, `password`, `qwerty`, tên + năm sinh

Cách nhớ mật khẩu phức tạp: Dùng **passphrase** — lấy chữ đầu của một câu bạn thuộc lòng: *"Tôi học lớp 12 trường THPT Nguyễn Huệ"* → `ThL12tTHPTNH@2024`

---

### ❓ Hacker mũ trắng làm gì? Có hợp pháp không?

**Trả lời:** **Hacker mũ trắng (White Hat / Ethical Hacker)** là chuyên gia bảo mật được **thuê hợp pháp** để:
- Tìm lỗ hổng bảo mật trong hệ thống
- Báo cáo lại để được vá (không khai thác)
- Tham gia chương trình Bug Bounty (nhận tiền thưởng cho lỗ hổng tìm được)

Đây là nghề nghiệp hợp pháp và được trả lương rất cao. Khác hoàn toàn với **hacker mũ đen (Black Hat)** tấn công trái phép để trục lợi.

---

## 📝 Câu Hỏi Về Thi Cử

### ❓ Môn Tin học thi theo hình thức nào?

**Trả lời:** Kỳ thi tốt nghiệp THPT môn Tin học thi theo hình thức **trắc nghiệm** (40 câu trong 50 phút). Đề thi bao gồm kiến thức lý thuyết từ chương trình Tin học lớp 10, 11, 12 — tập trung vào các chương trong tài liệu này.

---

### ❓ Nên học thuộc lòng hay hiểu bản chất?

**Trả lời:** **Kết hợp cả hai, nhưng ưu tiên hiểu bản chất.** Lý do:
- Đề thi trắc nghiệm thường có câu hỏi vận dụng (không thể chỉ thuộc lòng định nghĩa)
- Hiểu bản chất giúp suy luận ra đáp án ngay cả khi quên từ ngữ chính xác
- Một số khái niệm như SQL, HTML cần **nhớ cú pháp chính xác** — nên học thuộc

**Thứ tự ưu tiên:** Hiểu bản chất → Ghi nhớ điểm mấu chốt → Nhớ cú pháp kỹ thuật

---

### ❓ Những lỗi nào hay bị trừ điểm nhất?

**Trả lời:** Theo thống kê từ các đề thi trước, học sinh hay mất điểm vì:

1. **Nhầm Switch với Hub** — Switch chuyển đúng cổng, Hub phát tán tất cả
2. **Nhầm CSDL với DBMS** — MySQL là DBMS (phần mềm), không phải CSDL
3. **Nghĩ MAC address có thể định tuyến qua Internet** — MAC chỉ dùng trong LAN
4. **Nhầm `<ul>` và `<ol>`** — ordered = có số thứ tự
5. **Nghĩ AI đồng cảm thật sự** — AI chỉ bắt chước ngôn ngữ cảm xúc
6. **Nhầm White Hat và Black Hat hacker**
7. **Quên `PRIMARY KEY` phải Unique + Not Null cả hai điều kiện**
8. **Dùng WHERE thay vì HAVING để lọc nhóm** — HAVING dùng sau GROUP BY
9. **Quên WHERE trong UPDATE/DELETE** — gây ảnh hưởng toàn bộ bảng
10. **Nhầm DROP TABLE và TRUNCATE TABLE** — DROP xóa cả cấu trúc, TRUNCATE chỉ xóa dữ liệu

---

## 🌐 Câu Hỏi Về Chương 2 – Mạng Nâng Cao

### ❓ Mô hình OSI có 7 tầng — cần nhớ hết không? Nhớ thứ nào quan trọng nhất?

**Trả lời:** Cần nhớ **tên và số thứ tự** của cả 7 tầng. Quan trọng nhất cho bài thi:
- **Tầng 1 (Physical):** Bit, cáp vật lý, Hub
- **Tầng 2 (Data Link):** Frame, MAC address, Switch
- **Tầng 3 (Network):** Packet, IP address, Router
- **Tầng 4 (Transport):** Segment, TCP/UDP
- **Tầng 7 (Application):** HTTP, HTTPS, FTP, SMTP, DNS

Mẹo nhớ từ tầng 7 xuống 1: **"A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing"

---

### ❓ POP3 và IMAP khác nhau thế nào?

**Trả lời:** Cả hai đều dùng để **nhận email**, nhưng khác nhau cách xử lý:

| | POP3 | IMAP |
|---|---|---|
| **Cách hoạt động** | **Tải về** máy, xóa khỏi server | **Đồng bộ** với server |
| **Đọc offline** | Có | Hạn chế |
| **Nhiều thiết bị** | Khó (email chỉ ở một thiết bị) | Dễ (đồng bộ mọi thiết bị) |
| **Phù hợp** | Dùng 1 thiết bị cố định | Dùng nhiều thiết bị (hiện nay phổ biến hơn) |

---

### ❓ Tại sao HTTPS an toàn hơn HTTP?

**Trả lời:** HTTPS = HTTP + **mã hóa SSL/TLS**. Khi dùng HTTPS:
- Dữ liệu truyền đi được **mã hóa** → kẻ nghe lén không đọc được
- Xác thực **danh tính máy chủ** qua certificate → biết đúng website thật
- Chống tấn công **Man-in-the-Middle** (MITM)

Nhận biết HTTPS: URL bắt đầu bằng `https://` và có biểu tượng ổ khóa 🔒 trên trình duyệt.

---

### ❓ Firewall là gì? Có giống với Antivirus không?

**Trả lời:** **Không** — chúng khác nhau hoàn toàn:

| | Firewall | Antivirus |
|---|---|---|
| **Chức năng** | Kiểm soát **lưu lượng mạng** vào/ra | Phát hiện và diệt **malware** |
| **Hoạt động** | Chặn/cho phép kết nối theo quy tắc | Quét file, bộ nhớ tìm virus |
| **Ví dụ** | Windows Firewall | Windows Defender, Kaspersky |

Cần dùng **cả hai** để bảo vệ máy tính tốt nhất.

---

## 🤖 Câu Hỏi Về Chương 3 – AI Nâng Cao

### ❓ Machine Learning và Deep Learning khác nhau thế nào?

**Trả lời:**
- **Machine Learning (ML)** = dạy máy học từ dữ liệu. ML là một nhánh của AI.
- **Deep Learning (DL)** = ML dùng **mạng nơ-ron nhiều tầng** (deep neural networks). DL là một nhánh của ML.

**Quan hệ:** AI ⊃ Machine Learning ⊃ Deep Learning

Deep Learning cần **nhiều dữ liệu hơn** và **máy tính mạnh hơn**, nhưng cho kết quả tốt hơn với ảnh, âm thanh, ngôn ngữ.

---

### ❓ AI Bias (thiên kiến AI) là gì? Ví dụ thực tế?

**Trả lời:** AI Bias xảy ra khi AI đưa ra quyết định **phân biệt đối xử** do dữ liệu huấn luyện có vấn đề.

**Ví dụ thực tế:**
- Hệ thống tuyển dụng AI học từ CV lịch sử của một công ty vốn chủ yếu tuyển nam → AI tự động ưu tiên hồ sơ nam hơn nữ
- Hệ thống nhận diện khuôn mặt nhận diện kém hơn với người da màu vì dữ liệu huấn luyện chủ yếu là người da trắng

**Nguyên tắc:** AI không "có ý định" phân biệt — nó chỉ phản chiếu những thiên kiến có trong dữ liệu.

---

### ❓ Deepfake là gì? Làm sao nhận biết?

**Trả lời:** **Deepfake** là video/ảnh/âm thanh **giả mạo** người thật được tạo bằng AI (thường dùng kỹ thuật GAN — Generative Adversarial Network).

**Cách nhận biết (chưa hoàn hảo):**
- Chú ý vùng **mắt, răng, tóc** — thường bị lỗi nhất
- Ánh sáng và bóng không tự nhiên
- Môi không khớp hoàn toàn với âm thanh
- Nền bị mờ hoặc biến dạng

**Tác hại:** Lan truyền thông tin sai, thao túng dư luận, quấy rối cá nhân, lừa đảo tài chính.

---

## 🗄️ Câu Hỏi Về Chương 4 – SQL Nâng Cao

### ❓ DDL và DML khác nhau thế nào?

**Trả lời:**
- **DDL (Data Definition Language)** = lệnh thay đổi **cấu trúc** của CSDL: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`
- **DML (Data Manipulation Language)** = lệnh thay đổi **dữ liệu** trong bảng: `INSERT`, `UPDATE`, `DELETE`

Mẹo nhớ: DDL = *D*efinition (định nghĩa cấu trúc); DML = *M*anipulation (thao tác dữ liệu).

---

### ❓ GROUP BY và ORDER BY khác nhau thế nào?

**Trả lời:**
- **`GROUP BY`** = **gom nhóm** các hàng có cùng giá trị lại để tính hàm tổng hợp (COUNT, SUM, AVG...)
- **`ORDER BY`** = **sắp xếp** kết quả theo một cột

Ví dụ phân biệt:
```sql
-- ORDER BY: sắp xếp tên học sinh theo alphabet
SELECT HoTen FROM HocSinh ORDER BY HoTen ASC;

-- GROUP BY: đếm số học sinh trong từng lớp
SELECT MaLop, COUNT(*) FROM HocSinh GROUP BY MaLop;
```

Hai lệnh này có thể **dùng cùng nhau**: GROUP BY trước, ORDER BY sau.

---

### ❓ Khi nào dùng LEFT JOIN thay vì INNER JOIN?

**Trả lời:**
- Dùng **INNER JOIN** khi chỉ muốn xem hàng **có đủ thông tin ở cả hai bảng**
- Dùng **LEFT JOIN** khi muốn xem **tất cả hàng bảng trái**, kể cả chưa có dữ liệu bảng phải

**Ví dụ thực tế:**
```sql
-- INNER JOIN: chỉ lấy học sinh ĐÃ CÓ điểm thi
SELECT hs.HoTen, dt.Diem
FROM HocSinh hs
INNER JOIN DiemThi dt ON hs.MaHS = dt.MaHS;

-- LEFT JOIN: lấy TẤT CẢ học sinh, kể cả chưa có điểm (Diem = NULL)
SELECT hs.HoTen, dt.Diem
FROM HocSinh hs
LEFT JOIN DiemThi dt ON hs.MaHS = dt.MaHS;
```

---

## 🌍 Câu Hỏi Về Chương 5 – HTML & CSS Nâng Cao

### ❓ Thẻ ngữ nghĩa (semantic HTML) là gì? Có bắt buộc dùng không?

**Trả lời:** Thẻ ngữ nghĩa là các thẻ HTML mô tả **ý nghĩa** của nội dung, thay vì chỉ định dạng hiển thị.

| Không ngữ nghĩa | Có ngữ nghĩa |
|---|---|
| `<div id="header">` | `<header>` |
| `<div id="nav">` | `<nav>` |
| `<div id="content">` | `<main>` |
| `<div id="footer">` | `<footer>` |

**Lợi ích:**
- Giúp **công cụ tìm kiếm** (Google) hiểu cấu trúc trang tốt hơn
- Hỗ trợ **người khiếm thị** dùng screen reader
- Code dễ đọc, dễ bảo trì hơn

Trong bài thi, biết tên và ý nghĩa của các thẻ ngữ nghĩa phổ biến là đủ.

---

### ❓ Form HTML dùng để làm gì? Các loại input thường gặp?

**Trả lời:** `<form>` là vùng nhập liệu để người dùng gửi dữ liệu đến server (đăng nhập, đăng ký, tìm kiếm...).

**Các loại `<input>` hay gặp:**

| `type` | Hiển thị | Dùng cho |
|---|---|---|
| `text` | Ô văn bản | Họ tên, địa chỉ |
| `password` | Ô ẩn ký tự | Mật khẩu |
| `email` | Ô email (có kiểm tra @) | Địa chỉ email |
| `number` | Ô số | Tuổi, số lượng |
| `checkbox` | Ô tick vuông | Nhiều lựa chọn |
| `radio` | Nút tròn | Một lựa chọn duy nhất |
| `submit` | Nút gửi form | Xác nhận gửi |

---

### ❓ Box model trong CSS là gì?

**Trả lời:** Mọi phần tử HTML đều là một "hộp" gồm 4 lớp từ trong ra ngoài:

```
┌──────────────────────────────┐  ← margin (khoảng cách bên ngoài)
│  ┌────────────────────────┐  │  ← border (đường viền)
│  │  ┌──────────────────┐  │  │  ← padding (khoảng cách bên trong)
│  │  │    CONTENT       │  │  │  ← content (nội dung thực)
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

- **`padding`** = khoảng cách từ nội dung đến đường viền
- **`border`** = đường viền bao quanh
- **`margin`** = khoảng cách từ đường viền đến phần tử kế tiếp

---

## ⚖️ Câu Hỏi Về Chương 6 – Luật & Quyền riêng tư

### ❓ Open source có nghĩa là miễn phí không?

**Trả lời:** **Không nhất thiết.** "Open source" (mã nguồn mở) có nghĩa là **mã nguồn được công khai**, bạn có thể xem và sửa. Nhưng:

- Một số phần mềm open source miễn phí (Linux, Firefox)
- Một số có phiên bản thương mại (Red Hat Enterprise Linux)
- Giấy phép **GPL** yêu cầu phần mềm phái sinh cũng phải mã nguồn mở
- Giấy phép **MIT** cho phép dùng trong dự án thương mại mà không cần chia sẻ lại

**Ghi nhớ:** Open source ≠ Free software ≠ Freeware

---

### ❓ Dữ liệu cá nhân là gì? Tại sao cần bảo vệ?

**Trả lời:** Dữ liệu cá nhân là **thông tin có thể nhận dạng một người cụ thể**, bao gồm:
- **Trực tiếp:** Họ tên, CCCD, số điện thoại, email, ảnh mặt, vân tay
- **Gián tiếp:** Địa chỉ IP, vị trí GPS, lịch sử duyệt web, hành vi mua sắm

**Lý do bảo vệ:**
- Tránh bị **lừa đảo** (dùng thông tin để giả mạo, vay tiền...)
- Tránh bị **theo dõi** và lạm dụng bởi công ty quảng cáo
- Đây là **quyền cơ bản** của mỗi người theo quy định pháp luật (GDPR tại EU, Luật ANTT Việt Nam)

---

### ❓ Quy tắc 20-20-20 là gì? Tại sao cần áp dụng?

**Trả lời:** Quy tắc **20-20-20** giúp giảm mỏi mắt khi dùng màn hình:
- Cứ mỗi **20 phút** nhìn màn hình
- Hãy nhìn vật cách xa **20 feet** (~6 mét)
- Trong **20 giây**

**Tại sao cần?** Mắt căng thẳng khi nhìn gần lâu → khô mắt, đau đầu, giảm thị lực dài hạn. Quy tắc này giúp mắt nghỉ ngơi và điều tiết lại.

