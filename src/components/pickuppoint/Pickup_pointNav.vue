<template>
  <div class="pickup_point_nav bg-dark">
    <div class="pickup_point_nav_wrapper">
        <div class="pickup_point_nav_title">Точки выдачи</div>
        <div class="d-flex pickup_point_nav_choice">
            <div @click="nav_request_partner" v-if="isVisibleMyPoint == true && point_user.length !== 0" class="pickup_point_addPartners"><span>заявки в партнёры</span>
            <div class="circle_count_partners"><span>{{getCountPartners && getCountPartners}}</span></div></div>
            <div @click="addPartners" v-if="Object.keys(point_one).length !== 0 && isVisibleMyPoint == false && point_user.length == 0 ? true : false" class="pickup_point_addPartners"><span>добавить в партнёры</span></div>
            <div @click="nav_all" class="pickup_point_all"><span>все</span></div>
            <div @click="nav_my" class="pickup_point_my"><span>мои</span></div>
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
  name: 'PickupPointNav',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
        changeCurrentPage: 'pickuppoints/changeCurrentPage',
        changeIsVisibleMyPoint: 'pickuppoints/changeIsVisibleMyPoint',
    }),
    ...mapActions({
        addPartners: 'pickuppoints/addPartners',
        getStatusPartners: 'pickuppoints/getStatusPartners',
    }),
    nav_all(){
        let promise = new Promise((resolve, reject) => {
            resolve(this.$router.push('/pickup'))
        });
        promise.then(()=>{
            this.changeIsVisibleMyPoint(false);
            this.changeCurrentPage(1);
        })
    },
    nav_my(){
       let promise = new Promise((resolve, reject) => {
            resolve(this.$router.push('/pickup?settings=my'))
        });
        promise.then(()=>{
            this.changeIsVisibleMyPoint(true);
            this.changeCurrentPage(1);
        })
    },
    nav_request_partner(){
        alert('переход в заявки')
    },
  },
  computed: mapState({
    point_one: (state:any)=>state.pickuppoints.point_one,
    isVisibleMyPoint: (state:any)=>state.pickuppoints.isVisibleMyPoint,
    point_user: (state:any)=>state.pickuppoints.point_user,
    getCountPartners: (state:any)=>state.pickuppoints.getCountPartners,
  }),
  mounted() {
      this.getStatusPartners();
  },
});
</script>
<style lang="scss" scoped>
.pickup_point_nav_title{
    @media(max-width:900px){
        font-size: medium;
    }
}
.circle_count_partners{
    height: 16px;
    width: 16px;
    color: red;
    position: absolute;
    top: 0px;
    right: -11px;
    font-size: small;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
    }

}
.pickup_point_nav_choice{
    cursor: pointer;
    font-size: medium;

}
.pickup_point_my{
    display: flex;
    align-items: center;
    transition: all 0.35s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.pickup_point_addPartners{
    display: flex;
    align-items: center;
    transition: all 0.35s linear;
    margin-right: 20px;
    position: relative;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.pickup_point_all{
    display: flex;
    align-items: center;
    transition: all 0.35s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.pickup_point_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.pickup_point_nav_wrapper{
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