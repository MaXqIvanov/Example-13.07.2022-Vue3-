<template>
  <!-- <div id="nav">
    <router-link to="/">Личный кабинет</router-link> <span>| </span>
    <router-link to="/cars" v-if="userAuth">Машины</router-link> <span v-if="userAuth">| </span>
    <router-link to="/stores" v-if="userAuth">Магазины</router-link> <span v-if="userAuth">| </span>
    <router-link v-if="!userAuth" to="/auth">Авторизация</router-link>
    <router-link v-else to="/logout">Выход</router-link>
  </div> -->
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
        <li v-else class="nav-item">
          <router-link to="/logout">Выход</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import Cookies from 'js-cookie'
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  setup() {
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

