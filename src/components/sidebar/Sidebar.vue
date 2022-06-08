<script lang="ts">
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <!-- <div @mouseenter="toggleSidebar" @mouseleave="toggleSidebar" class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="!collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>Vue Sidebar</span>
    </h1>

    <SidebarLink to="/">Home</SidebarLink>
    <SidebarLink to="/dashboard">Dashboard</SidebarLink>
    <SidebarLink to="/analytics">Analytics</SidebarLink>
    <SidebarLink to="/friends">Friends</SidebarLink>
    <SidebarLink to="/image">Images</SidebarLink>

  </div> -->
   <div @mouseenter="toggleSidebar" @mouseleave="toggleSidebar" class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark custom"
   :style="{ width: sidebarWidth }">
    <router-link class="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    to="/">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">STORYROOM</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <SidebarLink to="/company" class="nav-link" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Компании
        </SidebarLink> 
      </li>
      <li>
        <SidebarLink to="/auth" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </SidebarLink>
      </li>
      <li>
        <SidebarLink to="/registration" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </SidebarLink>
      </li>
      <li>
        <SidebarLink to="/logout" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </SidebarLink>
      </li>
      <li>
        <SidebarLink to="/cars" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </SidebarLink>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/100379657?s=400&u=f5466ed5a05c8cc705c275e95e3c82952e6a2cb8&v=4" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Макс</strong>
        <!-- name user -->
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #389aa1;
  --sidebar-item-active: #02d9ff63;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>