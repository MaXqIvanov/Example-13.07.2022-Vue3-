<template>
  <div class="block_auth">
      <Registration v-if="!userAuth && isVisibleRegistration"/>
      <AuthModal v-if="!userAuth && !isVisibleRegistration"/>
      <LogOutModal v-else-if="userAuth && !isVisibleRegistration"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthModal from '@/components/Auth/AuthModal.vue';
import LogOutModal from '@/components/Auth/LogOutModal.vue';
import Registration from '@/components/Auth/Registration.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Auth',
  components: {
      AuthModal,
      LogOutModal,
      Registration,
  },
   data() {
      return {
        isVisibleRegistration: false
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    userAuth: (state:any)=> state.user.userAuth,
  }),
});
</script>
<style lang="scss">
    @import '../scss/Auth.scss';
</style>