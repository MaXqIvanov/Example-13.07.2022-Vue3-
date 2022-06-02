<template>
  <div class="block_auth">
      <AuthModal v-if="!userAuth"/>
      <LogOutModal v-else/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthModal from '@/components/Auth/AuthModal.vue';
import LogOutModal from '@/components/Auth/LogOutModal.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Auth',
  components: {
      AuthModal,
      LogOutModal,
  },
  computed: mapState({
    userAuth: (state:any)=> state.user.userAuth,
  }),
});
</script>
<style lang="scss">
    @import '../scss/Auth.scss';
</style>