<template>
    <div class="block_userAction bg-dark">
        <div class="block_userAction_wrapper">
            <div class="prood_nav_title">Пользователи</div>
            <div class="d-flex prood_nav_choice">
            <!-- <div @click="nav_all" class="prood_all"><span>все</span></div>
            <div @click="nav_my" class="prood_my"><span>мои</span></div> -->
            <form class="d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск...">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Поиск</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'UserAction',
  components: {
},
  data() {
      return {
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    userCompany: (state:any)=> state.user.userCompany,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.prood_nav_title{

}
.block_userAction{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.block_userAction_wrapper{
    height: 50px;
    width: 97%;
    color: white;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;
    font-size: x-large;
}
</style>
