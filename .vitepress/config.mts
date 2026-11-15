import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nana · PM",
  description: "B 端与 AI 产品经理 · 个人数字自留地",

  // ✅ 默认亮色（动森温暖米白），用户可手动切换暗黑森林模式
  appearance: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;800&family=Space+Grotesk:wght@400;600;700;800&display=swap'
    }],
    ['meta', { name: 'theme-color', content: '#5cb85c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  themeConfig: {
    // ✅ 导航栏
    nav: [
      { text: '🏠 我的主页', link: '/' },
      { text: '🕹️ 试玩 Demo', link: '/demo' },
      { text: '💼 项目经历', link: '/projects' },
      { text: '💡 个人思考', link: '/thoughts' },
    ],

    // 侧边栏（供移动端抽屉导航使用，桌面端保持全宽门户）
    sidebar: [
      {
        text: '🍃 岛民向导 · 快捷导航',
        items: [
          { text: '🏠 我的主页', link: '/' },
          { text: '🕹️ 试玩 Demo', link: '/demo' },
          { text: '💼 项目经历', link: '/projects' },
          { text: '💡 个人思考', link: '/thoughts' },
        ]
      },
      {
        text: '📬 联络与社交',
        items: [
          { text: '🐙 GitHub (yuzu9410)', link: 'https://github.com/yuzu9410' },
          { text: '✉️ 给我写信 (marshtt@163.com)', link: 'mailto:marshtt@163.com' },
        ]
      }
    ],

    // 右上角社交链接：仅保留 GitHub
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuzu9410' },
    ],

    // 页脚
    footer: {
      message: '🍃 数字小岛日常打理中 · Built with VitePress & Curiosity',
      copyright: '© 2024 Nana Gu'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // logo 图标
    logo: '/logo.svg',

    // 网站标题
    siteTitle: 'Nana · PM',
  },

  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro'
    },
    lineNumbers: true,
  },
})
