<template>
  <!-- Toggle sidebar button -->
  <button 
    class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 lg:hidden"
    @click="toggleSidebar">
    <tw-icon 
      name="heroicons-solid:menu-alt-4" 
      class="btn-toggle w-6 h-6 text-white" 
      :class="{'opacity-0': showSidebar}" />
    <tw-icon 
      name="heroicons-solid:x" 
      class="btn-toggle w-6 h-6 text-white"
      :class="{'opacity-0': !showSidebar}" />
  </button>

  <!-- Sidebar Overlay -->
  <div 
    class="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" 
    :class="{'hidden': !showSidebar}" 
    @click="showSidebar = false" />
  <div 
    class="fixed z-40 left-0 top-0 right-24 lg:right-auto lg:w-64 h-screen border-r border-gray-200 overflow-y-auto bg-white" 
    :class="{'hidden': allowSidebarHide && !showSidebar}">
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img 
        src="@/assets/logo-icon.png" 
        alt="Logo" 
        class="w-10">
      <div class="ml-2 flex flex-col">
        <h1 class="text-gray-400 font-medium text-sm">Piyo Web</h1>
      </div>
    </header>
    <!-- Menu -->
    <div class="mt-14">

      <menu-header 
        class="mt-10" 
        text="Menu" />
      <menu-item 
        icon="heroicons-outline:home" 
        text="Home" 
        :route="{path: '/'}" />
      <menu-item 
        icon="heroicons-outline:view-grid" 
        text="Media">
        <template #sub-menu>
          <sub-menu-item text="Downloader" />
          <sub-menu-item text="Simi" />
        </template>
      </menu-item>
      <menu-item 
        icon="heroicons-outline:library" 
        text="Game">
        <template #sub-menu>
          <sub-menu-item text="PayPal" />
          <sub-menu-item text="ShopeePay" />
        </template>
      </menu-item>
      <menu-item
        icon="heroicons-outline:user-group"
        text="Chats"
        :route="{path: '/chat'}"
        >
      </menu-item>

    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'

import MenuHeader from './TheSidebarMenuHeader.vue'
import MenuItem from './TheSidebarMenuItem.vue'
import SubMenuHeader from './TheSidebarSubMenuHeader.vue'
import SubMenuItem from './TheSidebarSubMenuItem.vue'

export default {
  name: 'TheSidebar',
  components: {
    MenuHeader,
    MenuItem,
    SubMenuHeader,
    SubMenuItem,
  },
  emits: ['visibility-change'],
  setup(_, {emit}) {
    const showSidebar = ref(false)
    const toggleSidebar = () => showSidebar.value = !showSidebar.value
    watch(showSidebar, (val) => {
      emit('visibility-change', val)
    })

    // Automatically hide sidebar when route changed
    const route = useRoute()
    watch(route, () => showSidebar.value = false)
    
    // Automatically hide sidebar when window size
    // lower than width breakpoint
    const widthBreakpoint = 1024 // Tailwind `lg` breakpoint
    const { width: windowWidth } = useWindowSize()
    watch(windowWidth, (newWidth) => {
      if (newWidth < widthBreakpoint) showSidebar.value = false
    })

    const allowSidebarHide = computed(() => windowWidth.value < widthBreakpoint)

    return {
      showSidebar,
      toggleSidebar,
      allowSidebarHide
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  @apply absolute left-1/2 top-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2;
}
</style>