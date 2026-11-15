import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomePage from './HomePage.vue'
import DemoPage from './DemoPage.vue'
import type { Theme } from 'vitepress'
// ✅ 引入动森主题自定义样式
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('DemoPage', DemoPage)
  }
} satisfies Theme
