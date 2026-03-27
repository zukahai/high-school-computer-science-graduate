import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/high-school-computer-science-graduate/',
  title: 'Tài Liệu Ôn Thi Tin Học THPT',
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
        ]
      },
      {
        text: '🤖 Chương 3: Trí Tuệ Nhân Tạo (AI)',
        collapsed: false,
        items: [
          { text: '3.1 – AI là gì?', link: '/chuong-3/3.1-ai-la-gi' },
          { text: '3.2 – Giới hạn của AI', link: '/chuong-3/3.2-gioi-han-ai' },
          { text: '3.3 – AI và Giáo dục', link: '/chuong-3/3.3-ai-giao-duc' },
        ]
      },
      {
        text: '🗄️ Chương 4: CSDL & SQL',
        collapsed: false,
        items: [
          { text: '4.1 – CSDL và DBMS', link: '/chuong-4/4.1-csld-dbms' },
          { text: '4.2 – Khóa chính & Khóa ngoại', link: '/chuong-4/4.2-khoa' },
          { text: '4.3 – Câu lệnh SQL', link: '/chuong-4/4.3-sql' },
        ]
      },
      {
        text: '🌍 Chương 5: HTML & CSS',
        collapsed: false,
        items: [
          { text: '5.1 – HTML cơ bản', link: '/chuong-5/5.1-html-co-ban' },
          { text: '5.2 – Bảng HTML', link: '/chuong-5/5.2-bang-html' },
          { text: '5.3 – CSS cơ bản', link: '/chuong-5/5.3-css-co-ban' },
        ]
      },
      {
        text: '⚖️ Chương 6: Đạo Đức & Nghề IT',
        collapsed: false,
        items: [
          { text: '6.1 – Văn hóa mạng', link: '/chuong-6/6.1-van-hoa-mang' },
          { text: '6.2 – An toàn thông tin', link: '/chuong-6/6.2-an-toan-thong-tin' },
          { text: '6.3 – Nghề IT', link: '/chuong-6/6.3-nghe-it' },
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