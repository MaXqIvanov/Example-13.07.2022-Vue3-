<template>
<div v-if="userAuth" class="main_all_window">
  <Sidebar />
  <div class="main_other_screen" :style="{ 'margin-left': sidebarWidth, 'width': `calc(100vw - ${sidebarWidth})`}">
    <router-view />
  </div>
</div>
<div v-else>
  <router-view />
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
  overflow-x: hidden;
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
<<<<<<< HEAD
=======

body::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
  }
body::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
  }
body::-webkit-scrollbar-thumb {
    background-color: #84d1fd; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #84d1fd; /* padding вокруг плашки */
  }
  *::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
  }
*::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
  }
*::-webkit-scrollbar-thumb {
    background-color: #84d1fd; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #84d1fd; /* padding вокруг плашки */
  }
>>>>>>> 0dad2458f2cc19c2cfc7182ce54e7801571415c1
</style>
