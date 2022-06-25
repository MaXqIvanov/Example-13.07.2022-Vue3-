<template>
  <div class="pickuppoints_map">
    <div class="pickuppoints_map_wrapper">
      <div class="block_address">
        <div class="block_address_wrapper">
          <div class="template_address" v-for="point in point_all" :key="point.id">
            <div :class="{active_map : point.id === currentMap}" @click="isDelete && [flyToNewPoint(point), getOnePoint({id: point.id}) ]"
            @dblclick="navigateToOneNomenclature" class="template_address_wrapper">
              <div class="map_company">{{point._company}}</div>
              <div class="map_address">{{point.address}}</div>
              <div title="редактировать точку выдачи" @mouseleave="changeIsDelete"
              @mouseenter="changeIsDelete" @click="changeChangeModal(); setPointOne(point)"
              v-if="isVisibleMyPoint == true && point_user.length !== 0"
              class="change_pickuppoints_map"></div>
              <div @mouseleave="changeIsDelete"
                  @mouseenter="changeIsDelete" v-if="isVisibleMyPoint && point_user.length > 0" class="delete_btn" @click="deletePoint(point)"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="point_map_wrapper">
        <div id="point_map"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "mapbox-gl/dist/mapbox-gl.css";
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import { collapsed } from '../sidebar/state';

export default defineComponent({
  name: 'Pickup_pointMap',
  data() {
    return {
      isCollapsed: true,
      isDelete: true as boolean,
    }
  },
  setup() {
    return { collapsed }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
      loadMap: 'pickuppoints/loadMap',
      flyToNewPoint: 'pickuppoints/flyToNewPoint',
      changeChangeModal: 'pickuppoints/changeChangeModal',
      setPointOne: 'pickuppoints/setPointOne',
    }),
    ...mapActions({
      getOnePoint: 'pickuppoints/getOnePoint',
      deletePoint: 'pickuppoints/deletePoint',
    }),
    navigateToOneNomenclature() {
      router.push(`/pickup/${this.currentMap}`)
    },
    changeIsDelete(){
      this.isDelete = !this.isDelete;
    }
  },
  computed: mapState({
    current_page_point: (state:any)=>state.pickuppoints.current_page_point,
    point_all: (state:any)=>state.pickuppoints.point_all,
    currentMap: (state:any)=>state.pickuppoints.currentMap,
    isVisibleMyPoint: (state:any)=> state.pickuppoints.isVisibleMyPoint,
    point_user: (state:any)=> state.pickuppoints.point_user,
  }),
  watch: {
    // Note: only simple paths. Expressions are not supported.
    current_page_point (){
      this.loadMap()
    },
    point_all (){
      this.loadMap()
    },
    collapsed (){      
      if(this.collapsed === false && this.isCollapsed){
       this.loadMap();
       this.isCollapsed = false;
      }
    }
  },
  mounted() {
    this.loadMap()
  },
});
</script>
<style lang="scss" scoped>
.change_pickuppoints_map{
  height: 13px;
  width: 13px;    
  position: absolute;
  top: 2px;
  right: 18px;
  background-image: url('../../assets/change_anything_V2_map.svg');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
  transition: all 0.3s linear;
  z-index: 999;
  &:hover{
    opacity: 1;
  }
}
.delete_btn{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 18px;
  width: 18px;
  opacity: 0.6;
  background-image: url('../../assets/close_btn.svg');
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover{
    opacity:0.8;
  }
}
.active_map{
  box-shadow: 0px 0px 4px rgba($color: #de00fc, $alpha: 1.0) !important;
}
.template_address{
  margin-top: 3px;
  margin-bottom: 3px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  .template_address_wrapper{
    height: 94%;
    width: 94%;
    box-shadow: 0px 0px 3px rgba(0, 219, 248, 0.94);
    border-radius: 5px;
    position: relative;
    padding: 2px;
    padding-left: 4px;
    cursor: pointer;
  }
}
.block_address_wrapper{
  height: 96%;
  width: 96%;
  overflow-y: scroll;
  max-height: 400px;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3px;
}
.block_address_wrapper::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
  }
  .block_address_wrapper::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
  }
  .block_address_wrapper::-webkit-scrollbar-thumb {
    background-color: #b8e5ff; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #b8e5ff; /* padding вокруг плашки */
  }
.block_address{
  box-shadow: 0px 0px 5px gray;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapboxgl-popup{
  min-width: 500px !important;
}
#point_map{
  min-height: 400px;
  width: 100%;
  min-width: 100% !important;
}
.point_map_wrapper{
  min-height: 400px;
  width: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  overflow: hidden;
  position: relative;
}
.pickuppoints_map_wrapper{
    margin-top: 10px;
    height: 96%;
    width: 100%;
    max-width: 100% !important;
    min-height: 400px;
    margin-right: 2px;
    margin-bottom: 20px;
    cursor: default;
    display: grid;
    grid-template-columns: 30% 70%;
    @media(max-width: 1300px){
      margin-right: 5px;
    }
}
.pickuppoints_map{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
</style>
<style lang="scss">

.mapboxgl-popup {
max-width: 400px !important;
font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.popup_size{
  span{
    margin-top: 2px;
  }
}
</style>