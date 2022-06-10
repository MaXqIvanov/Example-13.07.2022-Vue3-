<template>
  <div @mouseenter="toggleSidebar" @mouseleave="toggleSidebar" class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark custom"
   :style="{ width: sidebarWidth}">
    <router-link class="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    to="/">
      <svg class="bi me-2 custom-logo-stroyroom" width="35" height="35"></svg>
      <span v-if="collapsed" class="fs-4">STROYROOM</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li :class="{toggle_sidebar : !collapsed}" class="nav-item">
        <SidebarLink to="/" class="nav-link text-white">
          <svg class="bi me-2 custom-company-icon" width="20" height="18"></svg>
          <span v-if="collapsed">Компании</span>
        </SidebarLink> 
      </li>
      <li v-if="choose_company !== undefined" :class="{toggle_sidebar : !collapsed}">
        <SidebarLink :to="'/company/'+choose_company" class="nav-link text-white">
          <svg class="bi me-2 custom-about-company-icon" width="20" height="20"></svg>
          <span v-if="collapsed">О компании</span>
        </SidebarLink>
      </li>
      <li v-if="choose_company !== undefined" :class="{toggle_sidebar : !collapsed}">
        <SidebarLink to="/pickup" class="nav-link text-white">
          <svg class="bi me-2 custom-pickup-point-icon" width="20" height="20"></svg>
          <span v-if="collapsed">Точки выдачи</span>
        </SidebarLink>
      </li>
      <li v-if="choose_company !== undefined" :class="{toggle_sidebar : !collapsed}">
        <SidebarLink to="/prood" class="nav-link text-white">
          <svg class="bi me-2 custom-prood-icon" width="20" height="20"></svg>
          <span v-if="collapsed">Товары</span>
        </SidebarLink>
      </li>
      <li v-if="choose_company !== undefined" :class="{toggle_sidebar : !collapsed}">
        <SidebarLink to="/cars" class="nav-link text-white">
          <svg class="bi me-2 custom-cars-icon" width="20" height="22"></svg>
          <span v-if="collapsed">Машины</span>
        </SidebarLink>
      </li>
       <li v-if="choose_company !== undefined" :class="{toggle_sidebar : !collapsed}">
        <SidebarLink to="/users" class="nav-link text-white">
          <svg class="bi me-2 sidebar-users-icon" width="20" height="20"></svg>
          <span v-if="collapsed">Пользователи</span>
        </SidebarLink>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/100379657?s=400&u=f5466ed5a05c8cc705c275e95e3c82952e6a2cb8&v=4" alt="" width="32" height="32"
        class="rounded-circle me-2 custom-image-user">
        <strong v-if="collapsed">Макс</strong>
        <!-- name user -->
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">настройки</a></li>
        <li><a class="dropdown-item" href="#">профиль</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link to="/logout" class="dropdown-item" href="#">Выход из аккаунта</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  computed: mapState({
    choose_company: (state:any)=> state.company.choose_company,
  }),
}
</script>
<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #389aa1;
  --sidebar-item-active: #02d9ff63;
}
</style>

<style scoped>
.toggle_sidebar{
  margin-left: -40px;
}
.custom-image-user{
  margin-left: -1px;
}
.custom-logo-stroyroom{
  background-image: url('../../assets/storyroom-logo.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  margin-left: -5px;
}
.custom-prood-icon{
  background-image: url('../../assets/proods/prood-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
.custom-cars-icon{
  background-image: url('../../assets/cars/carts-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
.custom-pickup-point-icon{
  background-image: url('../../assets/pick-up_points/pick-up-point-icon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.custom-about-company-icon{
  background-image: url('../../assets/about_company/about_company_icon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.custom-company-icon{
  background-image: url('../../assets/company/company-icon.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.sidebar-users-icon{
  background-image: url('../../assets/users/пользователи.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
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