import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/documentation-template/',
  title: 'Project Documentation',
  description: 'Modern documentation template for any project',
  lang: 'en-US',
  ignoreDeadLinks: true,
  
  mermaid: {
    // mermaid config options
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'en-US': {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                displayDetails: 'Display details',
                resetButtonTitle: 'Clear search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/introduction/intro' },
      { text: 'Resources', link: '/appendix/resources' },
      { text: 'GitHub', link: 'https://github.com/yourusername/your-project' }
    ],

    sidebar: [
      {
        text: '📋 Introduction',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/introduction/intro' },
        ]
      },
      {
        text: '� Appendix',
        collapsed: true,
        items: [
          { text: 'Quick Reference', link: '/appendix/cheatsheet' },
          { text: 'FAQ', link: '/appendix/faq' },
          { text: 'Resources', link: '/appendix/resources' }
        ]
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/yourusername/your-project' 
      }
    ],

    footer: {
      message: 'Modern documentation template',
      copyright: 'Copyright © 2024'
    },

    editLink: {
      pattern: 'https://github.com/yourusername/your-project/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})