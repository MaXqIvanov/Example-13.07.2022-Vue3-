<template>
  <div class="home">
    <div class="home_wrapper">
      <UserInfo />
      <UserAction />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from '@/components/home/UserInfo.vue';
import UserAction from '@/components/home/UserAction.vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Home',
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
@import '../scss/Home.scss';
</style>