<template>
  <div class="users">
    <div class="users_wrapper">
      <UserInfo />
      <UserAction />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from '@/components/user/UserInfo.vue';
import UserAction from '@/components/user/UserAction.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Users',
  components: {
    UserInfo,
    UserAction
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