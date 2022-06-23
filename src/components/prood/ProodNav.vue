<template>
  <div class="prood_nav bg-dark">
    <div class="prood_nav_wrapper">
        <div class="prood_nav_title">Товары</div>
        <div class="d-flex prood_nav_choice">
            <div title="редактировать товар" @click="changeChangeModal" v-if="Object.keys(prood_one).length !== 0 && isVisibleMyProod == true && proods_user.length !== 0" class="prood_edit"></div>
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
  name: 'ProodNav',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
        changeCurrentPage: 'proods/changeCurrentPage',
        changeIsVisibleMyProod: 'proods/changeIsVisibleMyProod',
        changeChangeModal: 'proods/changeChangeModal',
    }),
    ...mapActions({
        getCurrentUserProod: 'proods/getCurrentUserProod',
        getProods: 'proods/getProods',
    }),
    nav_all(){
        let promise = new Promise((resolve, reject) => {
            resolve(this.$router.push('/prood'))
        });
        promise.then(()=>{
        this.changeIsVisibleMyProod(false);
        this.changeCurrentPage(1);
        })
    },
    nav_my(){
        let promise = new Promise((resolve, reject) => {
            resolve(this.$router.push('/prood?settings=my'))
        });
        promise.then(()=>{
        this.changeIsVisibleMyProod(true);
        this.changeCurrentPage(1);
        })
    }
   },
   computed: mapState({
       prood_one: (state:any)=> state.proods.prood_one,
       isVisibleMyProod: (state:any)=> state.proods.isVisibleMyProod,
       proods_user: (state:any)=> state.proods.proods_user,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.prood_edit{
    margin-right: 10px;
    height: 25px;
    width: 25px;    
    background-image: url('../../assets/change_anything_V2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.7;
    transition: all 0.3s linear;
    &:hover{
        opacity: 1;
    }
}
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