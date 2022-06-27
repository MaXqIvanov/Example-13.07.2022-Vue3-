<template>
  <div class="ProfileUser-info">
    <div class="ProfileUser-info_wrapper">
        <div class="profile_info">
            <div class="profile_img_wrapper"><div :style="[user_profile.img ? {backgroundImage: `url(${user_profile.img})`}
        :{backgroundImage: `url(${logo})`}]" class="profile_img"></div></div>
            <div class="profile_name mt-2">{{user_profile.name}}<div class="ms-1 change_img"></div></div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import logo from '../../assets/users/not_img_profile.svg';

export default defineComponent({
  name: 'ProfileUser-info',
  components: {
  },
  setup() {
    return { logo }
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    user_profile: (state:any)=> state.user.user_profile,
  }),
  mounted() {
  },
});
</script>
<style lang="scss">
.profile_img{
    height: 150px;
    width: 150px;
    background-repeat: no-repeat;
    background-size: contain;
}
.profile_img_wrapper{
    height: 150px;
    width: 150%;
    display: flex;
}
.profile_name{
    width: fit-content;
    display: flex;
}
.change_img{
    height: 20px;
    width: 20px;
    background-image: url('../../assets/users/change_numb.svg');
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
.profile_info{
    height: fit-content;
    width: fit-content;
    border: 1px solid rgb(168, 168, 168);
    padding: 20px;
    border-radius: 5px;
}
.ProfileUser-info{
    margin-top: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ProfileUser-info_wrapper{
    height: 100%;
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>