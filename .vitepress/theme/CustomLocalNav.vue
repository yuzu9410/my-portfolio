<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { onContentUpdated } from 'vitepress'
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { useLocalNav } from 'vitepress/dist/client/theme-default/composables/local-nav.js'
import { getHeaders } from 'vitepress/dist/client/theme-default/composables/outline.js'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'
import VPLocalNavOutlineDropdown from 'vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue'

defineProps<{
  open?: boolean
}>()

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()
const { headers } = useLocalNav()
const { y } = useWindowScroll()

const navHeight = ref(0)

onMounted(() => {
  navHeight.value = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--vp-nav-height'
    ) || '64'
  )
})

onContentUpdated(() => {
  headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline)
})

const empty = computed(() => {
  return headers.value.length === 0
})

const emptyAndNoSidebar = computed(() => {
  return empty.value && !hasSidebar.value
})

const classes = computed(() => {
  return {
    VPLocalNav: true,
    'has-sidebar': hasSidebar.value,
    empty: empty.value,
    fixed: emptyAndNoSidebar.value
  }
})

// 返回上一级功能
const goBack = () => {
  if (typeof window !== 'undefined') {
    if (window.history.length > 1 && window.location.pathname !== '/') {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }
}
</script>

<template>
  <div
    v-if="frontmatter.layout !== 'home' && (!emptyAndNoSidebar || y >= navHeight)"
    :class="classes"
  >
    <div class="local-nav-inner">
      <!-- 🍃 将原先的 menu 按钮改造为“返回上一级” -->
      <button
        type="button"
        class="ac-back-btn"
        aria-label="返回上一级"
        @click="goBack"
      >
        <span class="back-icon">‹</span>
        <span class="back-text">返回上一级</span>
      </button>

      <VPLocalNavOutlineDropdown :headers="headers" :navHeight="navHeight" />
    </div>
  </div>
</template>

<style scoped>
.VPLocalNav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-local-nav);
  border-bottom: 1.5px solid var(--ac-leaf-subtle, rgba(92, 184, 92, 0.25));
  padding-top: var(--vp-layout-top-height, 0px);
  width: 100%;
  background-color: var(--vp-c-bg);
  backdrop-filter: blur(10px);
}

.VPLocalNav.fixed {
  position: fixed;
}

@media (min-width: 960px) {
  .VPLocalNav {
    top: var(--vp-nav-height);
  }

  .VPLocalNav.has-sidebar {
    padding-left: var(--vp-sidebar-width);
  }

  .VPLocalNav.empty {
    display: none;
  }
}

@media (min-width: 1280px) {
  .VPLocalNav {
    display: none;
  }
}

@media (min-width: 1440px) {
  .VPLocalNav.has-sidebar {
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}

.local-nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  height: 48px;
}

/* 动森萌系圆角胶囊“返回上一级”按钮 */
.ac-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ac-leaf-dk, #2d5a37);
  background: rgba(92, 184, 92, 0.12);
  border: 1.5px solid rgba(92, 184, 92, 0.35);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  user-select: none;
}

.dark .ac-back-btn {
  color: var(--ac-leaf-lt, #a3e9a3);
  background: rgba(92, 184, 92, 0.18);
  border-color: rgba(92, 184, 92, 0.4);
}

.ac-back-btn:hover {
  background: var(--ac-leaf, #5cb85c);
  color: #ffffff;
  border-color: var(--ac-leaf, #5cb85c);
  transform: translateX(-3px) scale(1.03);
  box-shadow: 0 3px 10px rgba(92, 184, 92, 0.25);
}

.ac-back-btn:active {
  transform: scale(0.96);
}

.back-icon {
  font-size: 18px;
  line-height: 1;
  font-weight: 900;
  margin-top: -1px;
}

.back-text {
  font-size: 12.5px;
  letter-spacing: 0.02em;
}

:deep(.VPLocalNavOutlineDropdown) {
  padding: 8px 0;
}
</style>
