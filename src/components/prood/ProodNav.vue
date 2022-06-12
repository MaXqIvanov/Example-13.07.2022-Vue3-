<template>
  <div class="prood_nav bg-dark">
    <div class="prood_nav_wrapper">
        <div class="prood_nav_title">Товары</div>
        <div class="d-flex prood_nav_choice">
            <div class="prood_all"><span>все</span></div>
            <div class="prood_my"><span>мои</span></div>
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
  name: 'ProodNav',
  data() {
    return {
    }
  },
  components: {
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
<style lang="scss" scoped>
.prood_nav_choice{
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
.prood_nav_title{

}
.prood_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.prood_nav_wrapper{
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