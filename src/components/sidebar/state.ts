import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 280
export const SIDEBAR_WIDTH_COLLAPSED = 57
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED}px`
)