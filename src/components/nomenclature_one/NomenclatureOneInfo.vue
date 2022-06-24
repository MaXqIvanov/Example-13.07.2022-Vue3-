<template>
  <div class="proodOne-info">
    <div class="proodOne-info_wrapper">
        <div id="carouselExampleFade" class="carousel slide carousel-fade custom_carousel_nomenclature" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(images, index) in nomenclature_one.images" :key="index" class="carousel-item" :class="{'active' : current_img == index}">
                    <img class="d-block img" @click="changeCurrentImg(index)" :src="images" />
                </div> 
            </div>
            <button v-if="nomenclature_one?.images?.length > 1" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Предыдущий</span>
            </button>
            <button v-if="nomenclature_one?.images?.length > 1" class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Следующий</span>
            </button>
        </div>
        <div class="nomenclature_info">
            <div class="nomenclature_info_wrapper">
                <h3>Основные характеристики номенклатуры</h3>
                <div>описание : <span>{{nomenclature_one.description ? nomenclature_one.description : 'описание отсутствует'}}</span></div>
                <div>категория : <span>{{nomenclature_one._category ? nomenclature_one._category : 'отсутствует'}}</span></div>
                <div>подкатегория : <span>{{nomenclature_one._sub_category ? nomenclature_one._sub_category : 'отсутствует'}}</span></div>
                <div>средняя цена : <span>{{nomenclature_one.middle_cost ? nomenclature_one.middle_cost : 'отсутствует'}}</span></div>
                <div class="nomenclature_category">
                    <div>высота : <span>{{nomenclature_one.height ? nomenclature_one.height : 'отсутствует'}}</span></div>
                    <div>длина : <span>{{nomenclature_one.long ? nomenclature_one.long : 'отсутствует'}}</span></div>
                    <div>ширина : <span>{{nomenclature_one.width ? nomenclature_one.width : 'отсутствует'}}</span></div>
                    <div>вес : <span>{{nomenclature_one.weight ? nomenclature_one.weight : 'отсутствует'}}</span></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import "mapbox-gl/dist/mapbox-gl.css";

export default defineComponent({
  name: 'NomenclatureOneInfo',
  components: { },
   data: () => ({
       current_img: 0 as number,
  }),
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
    changeCurrentImg(id: number){
        console.log(id);
        this.current_img = id
    }
  },
  computed: mapState({
    nomenclature_one: (state:any)=> state.nomenclature.nomenclature_one,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.nomenclature_info_wrapper{
    width: 100%;
    height: fit-content;

    span{
        color: rgb(41, 41, 41);
    }
}
.carousel-inner{
    justify-content: center;
}
.custom_carousel_nomenclature{
    width: 400px;
}
.carousel-control-prev-icon{
    background-image: url('../../assets/left_button.svg');
    opacity: 0.5;

    &:hover{
    opacity: 0.8;
    }
}
.carousel-control-next-icon{
    background-image: url('../../assets/right_button.svg');
    opacity: 0.5;

    &:hover{
    opacity: 0.8;
    }
}
.active{
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
}
.img{
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
}
.nomenclature_info{
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.proodOne-info{
  height: 100%;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.proodOne-info_wrapper{
  margin-top: 30px;
  height: 90%;
  width: 90%;
  min-height: fit-content;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-around;
}
</style>