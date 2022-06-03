<template>
  <div id="nav">
    <router-link to="/">Личный кабинет</router-link> <span>| </span>
    <router-link to="/cars" v-if="userAuth">Машины</router-link> <span v-if="userAuth">| </span>
    <router-link to="/stores" v-if="userAuth">Магазины</router-link> <span v-if="userAuth">| </span>
    <router-link v-if="!userAuth" to="/auth">Авторизация</router-link>
    <router-link v-else to="/logout">Выход</router-link>
  </div>
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

