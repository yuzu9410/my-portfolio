import DefaultTheme from 'vitepress/theme'
import HomeCards from './HomeCards.vue'
import ThoughtsPage from './ThoughtsPage.vue'
import HomePage from './HomePage.vue'
import DemoPage from './DemoPage.vue'
import type { Theme } from 'vitepress'
// ✅ 引入自定义样式（Neo-Brutalism + Glassmorphism）
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeCards', HomeCards)
    app.component('ThoughtsPage', ThoughtsPage)
    app.component('HomePage', HomePage)
    app.component('DemoPage', DemoPage)
  }
} satisfies Theme
