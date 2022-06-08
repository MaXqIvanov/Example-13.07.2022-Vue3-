<template>
<nav class="navbar navbar-expand-lg bg-dark">
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
</nav>
<!-- 
  компании
  о компании
  точки выдачи
  товары
  машины
  пользователи
 -->
<!-- <div class="main_all_window">
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark custom" style="width: 280px;">
    <router-link class="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    to="/">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">STORYROOM</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/company" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Компании
        </router-link> 
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div> -->
  <router-view/>
<!-- </div> -->
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cookies from 'js-cookie'
import { mapActions, mapMutations, mapState } from 'vuex';
import { RouterView, RouterLink } from "vue-router";

export default defineComponent({
  setup() {
  },
   components: {
  RouterView,
  RouterLink
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