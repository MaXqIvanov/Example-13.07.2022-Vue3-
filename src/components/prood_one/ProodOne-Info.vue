<template>
  <div class="proodOne-info">
    <div class="proodOne-info_wrapper">
        <div class="block_nomenclature">
            <div class="proodOne_img" :style="[Object.keys(nomenclature_one).length !== 0 ? {backgroundImage: `url(${nomenclature_one.images[0]})`}
            :'']"></div>
            <div class="proodOne_info">
                <div><span class="category">категория : </span>{{nomenclature_one?._category}}</div>
                <div><span class="category">подкатегория : </span>{{nomenclature_one?._sub_category ? nomenclature_one?._sub_category : 'отсутствует'}}</div>
                <div><span class="category">единица измерения : </span>{{nomenclature_one._measurement?.name}}</div>
                <div><span class="category">средняя цена : </span>{{nomenclature_one?.middle_cost}} ₽</div>
                <div><span class="category">стоимость : </span>{{prood_one?.cost}} ₽</div>
                <div><span class="category">количество : </span>{{prood_one?.count}}</div>
                <div><span class="category">описание : </span>{{nomenclature_one?.description ? nomenclature_one?.description : 'отсутствует'}}</div>
                <div class="dimensions">
                    <span class="category ">габариты : </span>
                    <div class="dimensions_attribute">
                      <div><span class="category">высота : </span>{{nomenclature_one.height}}</div>
                      <div><span class="category">длина : </span>{{nomenclature_one.long}}</div>
                      <div><span class="category">ширина : </span>{{nomenclature_one.width}}</div>
                      <div><span class="category">вес : </span>{{nomenclature_one.weight}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="separate_line"></div>
        <div class="block_address">
            <div id="map" />
            <div v-if="prood_one?._shop?.address">{{prood_one._shop?.address}}</div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import "mapbox-gl/dist/mapbox-gl.css";

export default defineComponent({
  name: 'proodOne-info',
  components: { },
   data: () => ({
  }),
  methods: {  
    ...mapMutations({
      loadMap: 'proods/loadMap'
    }),
    ...mapActions({
      getOneProod: 'proods/getOneProod'
    }),

  },
  computed: mapState({
    prood_one: (state:any)=> state.proods.prood_one,
    nomenclature_one: (state:any)=> state.nomenclature.nomenclature_one,
  }),
  mounted() {
    this.getOneProod()
    this.loadMap()
  },
});
</script>
<style lang="scss" scoped>
#map {
  height: 300px;
}
.dimensions_attribute{
  margin-left: 20px;
  font-size: small;
}
.dimensions{
  display: flex;
}
.proodOne_info{
    margin-left: 40px;
}
.block_nomenclature{
    display: flex;
    justify-content: center;
    align-items: center;
}
.separate_line{
    width: 2px;
    border: 1px solid rgb(0, 247, 255);
}
.proodOne_img{
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-size: contain;
}
.proodOne-info{
  height: 100%;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.proodOne-info_wrapper{
  margin-top: 10px;
  height: 90%;
  width: 90%;
  min-height: fit-content;
  display: grid;
  grid-template-columns: 49% 2% 49%;
  font-family: 'Montserrat', sans-serif;
  color: rgb(100, 100, 100);
}
</style>