<template>
     <div class="cars_nav bg-dark">
    <div class="cars_nav_wrapper">
        <div class="cars_nav_title">Машины</div>
        <div class="d-flex cars_nav_choice">
            <div @click="nav_all" class="prood_all"><span>все</span></div>
            <div @click="nav_my" class="prood_my"><span>мои</span></div>
            <form class="d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск...">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Поиск</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'CarsNav',
  components: {
  },
  data() {
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
    nav_all(){
        router.push('/cars')
    },
    nav_my(){
        router.push('/cars?settings=my')
    }
  },
  computed: mapState({
  }),
  mounted() {
  }
});
</script>
<style lang="scss" scoped>
.cars_nav_choice{
    cursor: pointer;
    font-size: medium;

}
.prood_my{
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.prood_all{
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.cars_nav_title{

}
.cars_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.cars_nav_wrapper{
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
