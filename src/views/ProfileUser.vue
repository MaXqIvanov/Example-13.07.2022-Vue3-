<template>
  <div class="profile_user">
    <div class="profile_user_wrapper">
        <ProfileUserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ProfileUserInfo from '@/components/profile-user/ProfileUser-info.vue';

export default defineComponent({
  name: 'ProfileUser',
  components: {
    ProfileUserInfo
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
.profile_user{
    margin-top: 30px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile_user_wrapper{
    height: 100%;
    width: 96%;
    min-height: 85vh;
}
</style>