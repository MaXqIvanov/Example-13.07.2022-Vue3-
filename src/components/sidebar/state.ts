import { ref, computed } from 'vue'

export const collapsed:any = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH:number = 280
export const SIDEBAR_WIDTH_COLLAPSED = 57
export const sidebarWidth:any = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSED}px`
)