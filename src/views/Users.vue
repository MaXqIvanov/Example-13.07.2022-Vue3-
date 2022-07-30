<template>
  <div class="users">
    <div class="users_wrapper">
      <UserNav />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from '@/components/user/UserInfo.vue';
import UserNav from '@/components/user/UserNav.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Users',
  components: {
    UserInfo,
    UserNav
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  mounted() {
  },
});
</script>
<style lang="scss">
@import '../scss/Users.scss';
</style>