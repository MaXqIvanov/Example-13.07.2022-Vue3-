<template>
    <div class="block_userInfo">
        <div class="block_userInfo_wrapper">
            <div class="add_car">
              <div title="добавить пользователя" class="add_car_wrapper">
                <div class="add_car_img"></div>
              </div>
            </div>
            <div v-for="user in users_all" :key="user.id" class="user_list">
                <div class="card_user_list">
                    <div class="card_user_id">#{{user.id}}</div>
                    <div class="card_user_img_wrapper"><div  :style="[user.img ? {backgroundImage: `url(${user.img})`}
                    :{backgroundImage: `url(${logotype})`}]" class="card_user_img"></div>
                    <div class="card_user_name">{{user.name}}</div></div>
                    <div class="card_user_role mt-4">
                      разрешённые права пользователю : 
                      <div class="form-check form-switch">
                        <input v-model="user.admin" class="form-check-input" type="checkbox" role="switch" id="user_admin">
                        <label class="form-check-label" for="user_admin">админестратор</label>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import logotype from '../../assets/users/not_img_profile.svg';

export default defineComponent({
  name: 'UserInfo',
  components: {
  },
  data() {
      return {
      }
  },
  setup() {
      return {
          logotype
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      changeNameProfileUser: 'user/changeNameProfileUser',
      getUsers: 'user/getUsers',
    }),
  },
  computed: mapState({
      users_all: (state:any)=> state.user.users_all,
  }),
  mounted() {
      this.getUsers()
  }
});
</script>
<style lang="scss" scoped>
.card_user_name{
  font-size: x-large;
}
.card_user_id{
    position: absolute;
    top: 0px;
    left: 0px;
}
.card_user_img_wrapper{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
}
.card_user_img{
    height: 100px;
    width: 100px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    background-position: start;
}
.active_add_car_wrapper{
    position: absolute !important;
    top: 0px;
    left: 50px;
}
.check_type{
  position: absolute;
  top: -28px;
  right: 25px;
}
.cars_empty{
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    height: fit-content;
    width: fit-content;
  }
}
.car_image{
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
}
.add_car_img{
    height: 150px;
    width: 150px;
    background-image: url('../../assets/cars/add_anything_car.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;

    &:hover{
        opacity: 0.55;
    }
}
.active_add_car{
    justify-content: start !important;
}
.add_car{
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.add_car_wrapper{
  height: 350px;
  width: 300px;
  box-shadow: 0px 0px 5px rgb(174, 174, 174);
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.card_user_list{
  height: 350px;
  width: 300px;
  box-shadow: 0px 0px 5px rgb(174, 174, 174);
  min-width: 300px;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
  position: relative;
  cursor: default;
}
.user_list{
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.block_userInfo{
    margin-top: 35px;
    margin-bottom: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.block_userInfo_wrapper{
    width: 90%;
    height: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1.33%;
    row-gap: 30px;
    @media(max-width: 1660px){
      grid-template-columns: 32% 32% 32%;
      column-gap: 2%;
    }
    @media(max-width: 1300px){
      grid-template-columns: 48% 48%;
      column-gap: 4%;
    }
    @media(max-width: 800px){
      grid-template-columns: 100%;
    }
}
</style>
