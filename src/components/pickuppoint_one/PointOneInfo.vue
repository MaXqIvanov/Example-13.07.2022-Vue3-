<template>
  <div class="pointOne-info">
    <div class="pointOne-info_wrapper">
        <div class="block_pointOne">
            <h3>Информация о точке выдачи</h3>
            <div class="d-flex">Наименование компании :<div class="img" :style="[Object.keys(point_one).length !== 0 ? {backgroundImage: `url(${point_one.img})`}
            :'']"></div> {{point_one._company}}</div>
            <div>город : {{point_one._city}}</div>
            <div>Адрес компании : {{point_one.address}}</div>
            <div>{{point_one.description}}</div>
            <br />
            <div @click="addPartners" title="при добавлении точки в избранное, человеку, который владеет данной точкой отправится запрос в партнёры" class="btn btn-primary">добавить точку в избранное</div>
        </div>
        <div class="separate_line_wrapper">
            <div class="separate_line"></div>
        </div>
        <div class="block_address">
            <div id="onePoint_map"></div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import "mapbox-gl/dist/mapbox-gl.css";

export default defineComponent({
  name: 'PointOneInfo',
  components: { },
   data: () => ({
  }),
  methods: {  
    ...mapMutations({
        loadOnePointMap: 'pickuppoints/loadOnePointMap'
    }),
    ...mapActions({
        addPartners: 'pickuppoints/addPartners',
    }),

  },
  computed: mapState({
      point_one: (state:any)=> state.pickuppoints.point_one
  }),
  mounted() {
      this.loadOnePointMap()
  },
});
</script>
<style lang="scss" scoped>
.img{
    margin-left: 10px;
    margin-right: 5px;
    height: 25px;
    width: 25px;
    background-repeat: no-repeat;
    background-size: contain;
}
#onePoint_map{
    height: 300px;
    width: 100%;
}
.separate_line_wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
}
.block_address{
    width: 100%;
}
.block_pointOne{
    width: 100%;
}
.separate_line{
    width: 2px;
    border: 1px solid rgb(0, 247, 255);
}
.pointOne-info{
  height: 100%;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.pointOne-info_wrapper{
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