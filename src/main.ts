import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(store).use(router).mount('#app')




// <script lang="ts">
// import { defineComponent } from 'vue';
// import { mapActions, mapMutations, mapState } from 'vuex';
// export default defineComponent({
//   name: 'AuthModal',
//   components: {
//   },
//   data() {
//   },
//   methods: {  
//     ...mapMutations({
//     }),
//     ...mapActions({
//     }),
//   },
//   computed: mapState({
//   }),
// });
// </script>

// <style lang="scss">
// </style>
