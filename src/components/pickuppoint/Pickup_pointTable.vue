<template>
  <div class="pickuppoints_table">
    <div class="pickuppoints_table_wrapper">
      <div class="form-check form-switch d-flex justify-content-end me-2">
        <input class="form-check-input me-2 custom_form_check" type="checkbox" role="switch" id="flexSwitchCheckMap"
        @change="changeDisplayWindow" :checked="visibleMap">
        <label class="form-check-label" for="flexSwitchCheckMap">отобразить ввиде карты</label>
      </div>
      <!-- table-hover -->
        <table v-if="!visibleMap" class="table table-bordered table-dark custom_table">
            <thead class="thead">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">город</th>
                    <th scope="col">компания</th>
                    <th scope="col">адрес</th>
                    <th scope="col">описание</th>
                </tr>
            </thead>
            <tbody >
                <tr @click="isDelete && getOnePoint(pickuppoints)" v-for="pickuppoints in point_all" :key="pickuppoints.id"
                @dblclick="navigateToOneNomenclature">
                  <th :class="{'active_stroke_table': pickuppoints.id == choose_point}" scope="row">{{ pickuppoints?.id }}</th>
                  <td class="col-1" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?._city }}</td>
                  <td class="col-1" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?._company }}</td>
                  <td class="col-4" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?.address }}</td>
                  <td class="col-6 point_description" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?.description ? 
                  pickuppoints?.description : 'описание отсутствует'}}<span v-if="isVisibleMyPoint && point_user.length > 0" @mouseleave="changeIsDelete"
                  @mouseenter="changeIsDelete" title="удалить точку выдачи" @click="deletePoint(pickuppoints)"
                  class="delete_btn"></span></td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <Pickup_pointMap />
        </div>
        <div @click="changeCreateModal" title="добавить свою точку выдачи" class="add_new_prood bg-dark">
          <span class="icon_img_add"></span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import Pickup_pointMap from '@/components/pickuppoint/Pickup_pointMap.vue';

export default defineComponent({
  name: 'Pickup_pointTable',
  data() {
    return {
      isDelete: true as boolean,
    }
  },
  components: {
    Pickup_pointMap
  },
   methods: {  
    ...mapMutations({
      changeDisplayWindow: 'pickuppoints/changeDisplayWindow',
      changeCreateModal: 'pickuppoints/changeCreateModal'
    }),
    ...mapActions({
      getOnePoint: 'pickuppoints/getOnePoint',
      deletePoint: 'pickuppoints/deletePoint',
    }),
    navigateToOneNomenclature() {
      router.push(`/pickup/${this.choose_point}`)
    },
    changeIsDelete(){
      this.isDelete = !this.isDelete;
    }
  },
  computed: mapState({
    point_all: (state:any)=> state.pickuppoints.point_all,
    choose_point: (state:any)=> state.pickuppoints.choose_point,
    visibleMap: (state:any)=> state.pickuppoints.visibleMap,
    isVisibleMyPoint: (state:any)=> state.pickuppoints.isVisibleMyPoint,
    point_user: (state:any)=> state.pickuppoints.point_user,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.point_description{
  position: relative;
}
.delete_btn{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 15px;
  width: 15px;
  opacity: 0.6;
  background-image: url('../../assets/close_btn.svg');
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover{
    opacity:0.8;
  }
}
.custom_form_check{
  cursor: pointer !important;
}
.custom_table{
  border-radius: 5px !important;
  overflow:hidden;
  cursor: pointer;
}
.nomenclature_img{
    //   --bs-body-font-family: var(--bs-font-sans-serif);
    // --bs-body-font-size: 0.1rem;
    // --bs-body-font-weight: 200;
    // --bs-body-line-height: 1.5 !important;
  background-size: 50px 50px;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  background-position: center;
  background-color: rgb(255, 255, 255) !important;
  border: 2px solid #dee2e6 !important;
  box-sizing: border-box;
}
.icon_img_add{
  height: 25px;
  width: 25px;
  background: url('../../assets/company/add_anything.svg');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;

  &:hover{
    opacity: 1;
  }
}
.add_new_prood{
  width: 100%;
  height: 50px;
  box-shadow:  0px 0px 5px rgba($color: rgb(0, 255, 255), $alpha: 0.6);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover{
    box-shadow:  0px 0px 5px rgba($color: rgb(0, 255, 255), $alpha: 0.9);
  }
}
.active_stroke_table{
  background: #008cff96;
  color: black;
}
.pickuppoints_table{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.pickuppoints_table_wrapper{
    margin-top: 10px;
    height: 100%;
    width: 98%;
    max-width: 98% !important;
    min-height: 85vh;
    margin-right: 2px;
    cursor: default;
    @media(max-width: 1300px){
      margin-right: 5px;
    }
}

</style>