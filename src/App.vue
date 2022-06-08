<template>
<!-- <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Личный кабинет</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li v-if="userAuth" class="nav-item">
          <router-link to="/cars">Машины</router-link> 
        </li>
        <li v-if="userAuth" class="nav-item">
          <router-link to="/stores">Магазины</router-link> 
        </li>
        <li v-if="!userAuth" class="nav-item">
          <router-link to="/auth">Авторизация</router-link>
        </li>
        <li v-if="userAuth" class="nav-item">
          <router-link to="/logout">Выход</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
<!-- 
  компании
  о компании
  точки выдачи
  товары
  машины
  пользователи
 -->
<div class="main_all_window">
  <Sidebar />
   <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cookies from 'js-cookie'
import { mapActions, mapMutations, mapState } from 'vuex';
import { RouterView, RouterLink } from "vue-router";
import Sidebar from './components/sidebar/Sidebar.vue';
import { sidebarWidth } from '@/components/sidebar/state'

export default defineComponent({
   setup() {
    return { sidebarWidth }
  },
   components: {
  RouterView,
  RouterLink,
  Sidebar,
  },
  data() {
    return {
      auth: false,
    }
  },
   methods: {  
     ...mapMutations({
    }),
    ...mapActions({
      checkAuth: 'user/checkAuth',
      getProfile: 'user/getProfile'
    }),
  },
  computed: mapState({
    userAuth: (state:any)=> state.user.userAuth,
  }),
   mounted() {
    this.checkAuth()
    this.getProfile()
  },
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main_all_window{
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px auto;
}
#nav {
  padding: 30px;
 text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar{
  a{
    color: white;
     transition: all 0.25s linear;
    &:hover{
      color: gray;
    }
  }
}
.navbar-toggler{
  background: rgb(248, 248, 248) !important;
}
.nav-item{

  a{
    text-decoration: none;
    margin-left: 10px;
  }
}
.navbar-collapse{
  width: fit-content;
  flex-grow: 0 !important;
}
.navbar-toggler-icon{
  background-image: url('./assets/burger_icon.svg');
}
.custom{
  position:fixed;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}
</style>
<!-- sidebar 
https://getbootstrap.com/docs/5.0/examples/sidebars/ -->