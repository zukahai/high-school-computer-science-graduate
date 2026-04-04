import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/high-school-computer-science-graduate/',
  title: 'Ôn thi tốt nghiệp tin học thpt | HaiZuka Academy',
  description: 'Tài liệu ôn thi môn Tin học THPT - Dành cho học sinh mất gốc',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  
  mermaid: {
    // mermaid config options
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'vi-VN': {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm tài liệu'
              },
              modal: {
                displayDetails: 'Hiển thị chi tiết',
                resetButtonTitle: 'Xóa tìm kiếm',
                backButtonTitle: 'Đóng tìm kiếm',
                noResultsText: 'Không tìm thấy kết quả',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Giới Thiệu', link: '/introduction/intro' },
      {
        text: 'Chương Học',
        items: [
          { text: 'Chương 2: Mạng máy tính', link: '/chuong-2/2.1-thiet-bi-mang' },
          { text: 'Chương 3: Trí tuệ nhân tạo', link: '/chuong-3/3.1-ai-la-gi' },
          { text: 'Chương 4: CSDL & SQL', link: '/chuong-4/4.1-csld-dbms' },
          { text: 'Chương 5: HTML & CSS', link: '/chuong-5/5.1-html-co-ban' },
          { text: 'Chương 6: Đạo đức & Nghề IT', link: '/chuong-6/6.1-van-hoa-mang' },
        ]
      }
    ],

    sidebar: [
      {
        text: '📋 Giới Thiệu',
        collapsed: false,
        items: [
          { text: 'Bắt đầu học', link: '/introduction/intro' },
        ]
      },
      {
        text: '🌐 Chương 2: Mạng Máy Tính & Internet',
        collapsed: false,
        items: [
          { text: '2.1 – Thiết bị mạng', link: '/chuong-2/2.1-thiet-bi-mang' },
          { text: '2.2 – TCP/IP', link: '/chuong-2/2.2-tcp-ip' },
          { text: '2.3 – LAN & Chia sẻ tài nguyên', link: '/chuong-2/2.3-lan' },
          { text: '2.4 – Mô hình OSI', link: '/chuong-2/2.4-mo-hinh-osi' },
          { text: '2.5 – Internet & Dịch vụ', link: '/chuong-2/2.5-internet-dich-vu' },
          { text: '2.6 – Bảo mật mạng', link: '/chuong-2/2.6-bao-mat-mang' },
          { text: '2.7 – Phân loại mạng', link: '/chuong-2/2.7-phan-loai-mang' },
          { text: '2.8 – Ôn tập Chương 2', link: '/chuong-2/2.8-on-tap' },
        ]
      },
      {
        text: '🤖 Chương 3: Trí Tuệ Nhân Tạo (AI)',
        collapsed: false,
        items: [
          { text: '3.1 – AI là gì?', link: '/chuong-3/3.1-ai-la-gi' },
          { text: '3.2 – Giới hạn của AI', link: '/chuong-3/3.2-gioi-han-ai' },
          { text: '3.3 – AI và Giáo dục', link: '/chuong-3/3.3-ai-giao-duc' },
          { text: '3.4 – Học máy (Machine Learning)', link: '/chuong-3/3.4-hoc-may' },
          { text: '3.5 – Ứng dụng AI trong cuộc sống', link: '/chuong-3/3.5-ung-dung-ai' },
          { text: '3.6 – Đạo đức AI', link: '/chuong-3/3.6-dao-duc-ai' },
          { text: '3.7 – AI và Xã hội', link: '/chuong-3/3.7-ai-xa-hoi' },
          { text: '3.8 – Ôn tập Chương 3', link: '/chuong-3/3.8-on-tap' },
        ]
      },
      {
        text: '🗄️ Chương 4: CSDL & SQL',
        collapsed: false,
        items: [
          { text: '4.1 – CSDL và DBMS', link: '/chuong-4/4.1-csld-dbms' },
          { text: '4.2 – Khóa chính & Khóa ngoại', link: '/chuong-4/4.2-khoa' },
          { text: '4.3 – Câu lệnh SQL cơ bản', link: '/chuong-4/4.3-sql' },
          { text: '4.4 – DDL: Tạo và quản lý bảng', link: '/chuong-4/4.4-sql-ddl' },
          { text: '4.5 – DML: Thêm, sửa, xóa dữ liệu', link: '/chuong-4/4.5-sql-dml' },
          { text: '4.6 – SQL nâng cao: GROUP BY & JOIN', link: '/chuong-4/4.6-sql-nangcao' },
        ]
      },
      {
        text: '🌍 Chương 5: HTML & CSS',
        collapsed: false,
        items: [
          { text: '5.1 – HTML cơ bản', link: '/chuong-5/5.1-html-co-ban' },
          { text: '5.2 – Bảng HTML', link: '/chuong-5/5.2-bang-html' },
          { text: '5.3 – CSS cơ bản', link: '/chuong-5/5.3-css-co-ban' },
          { text: '5.4 – Liên kết và Hình ảnh', link: '/chuong-5/5.4-lien-ket-hinh-anh' },
          { text: '5.5 – Form HTML', link: '/chuong-5/5.5-form-html' },
          { text: '5.6 – Thẻ ngữ nghĩa HTML', link: '/chuong-5/5.6-the-ngu-nghia' },
          { text: '5.7 – CSS Nâng Cao', link: '/chuong-5/5.7-css-nang-cao' },
          { text: '5.8 – Ôn Tập Chương 5', link: '/chuong-5/5.8-on-tap' },
        ]
      },
      {
        text: '⚖️ Chương 6: Đạo Đức & Nghề IT',
        collapsed: false,
        items: [
          { text: '6.1 – Văn hóa mạng', link: '/chuong-6/6.1-van-hoa-mang' },
          { text: '6.2 – An toàn thông tin', link: '/chuong-6/6.2-an-toan-thong-tin' },
          { text: '6.3 – Nghề IT', link: '/chuong-6/6.3-nghe-it' },
          { text: '6.4 – Luật An ninh mạng', link: '/chuong-6/6.4-luat-an-ninh-mang' },
          { text: '6.5 – Bản quyền phần mềm', link: '/chuong-6/6.5-ban-quyen-phan-mem' },
          { text: '6.6 – Quyền riêng tư số', link: '/chuong-6/6.6-quyen-rieng-tu' },
          { text: '6.7 – Sức khỏe khi dùng máy tính', link: '/chuong-6/6.7-suc-khoe-may-tinh' },
          { text: '6.8 – Tác động của CNTT đến xã hội', link: '/chuong-6/6.8-tac-dong-cntt' },
          { text: '6.9 – Ôn tập Chương 6', link: '/chuong-6/6.9-on-tap' },
        ]
      },
      {
        text: '📚 Phụ Lục',
        collapsed: true,
        items: [
          { text: 'Tóm tắt nhanh', link: '/appendix/cheatsheet' },
          { text: 'Câu hỏi thường gặp', link: '/appendix/faq' },
          { text: 'Tài nguyên học tập', link: '/appendix/resources' }
        ]
      }
    ],

    socialLinks: [],

    footer: {
      message: 'Tài liệu ôn thi Tin học THPT - Dành cho học sinh mất gốc',
      copyright: 'Copyright © 2024'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})