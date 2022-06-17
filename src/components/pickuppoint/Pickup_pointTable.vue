<template>
  <div class="pickuppoints_table">
    <div class="pickuppoints_table_wrapper">
      <div class="form-check form-switch d-flex justify-content-end">
        <input class="form-check-input me-2 custom_form_check" type="checkbox" role="switch" id="flexSwitchCheckMap"
        @change="changeDisplayWindow" :checked="visibleMap">
        <label class="form-check-label" for="flexSwitchCheckMap">отобразить ввиде карты</label>
      </div>
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
                <tr @click="getOnePoint(pickuppoints)" v-for="pickuppoints in point_all" :key="pickuppoints.id"
                @dblclick="navigateToOneNomenclature">
                  <th :class="{'active_stroke_table': pickuppoints.id == choose_point}" scope="row">{{ pickuppoints?.id }}</th>
                  <td class="col-1" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?._city }}</td>
                  <td class="col-1" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?._company }}</td>
                  <td class="col-4" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?.address }}</td>
                  <td class="col-6 point_description" :class="{'active_stroke_table': pickuppoints.id == choose_point}">{{ pickuppoints?.description ? 
                  pickuppoints?.description : '-'}}</td>
                </tr>
            </tbody>
        </table>
        <div title="добавить свою точку выдачи" class="add_new_prood">
          <span class="icon_img_add"></span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Pickup_pointTable',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
      changeDisplayWindow: 'pickuppoints/changeDisplayWindow'
    }),
    ...mapActions({
      getOnePoint: 'pickuppoints/getOnePoint',
    }),
    navigateToOneNomenclature() {
      router.push(`/pickup/${this.choose_point}`)
    }
  },
  computed: mapState({
    point_all: (state:any)=> state.pickuppoints.point_all,
    choose_point: (state:any)=> state.pickuppoints.choose_point,
    visibleMap: (state:any)=> state.pickuppoints.visibleMap,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.custom_form_check{
  cursor: pointer !important;
}
.custom_table{
  border-radius: 5px !important;
  overflow:hidden;
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
  opacity: 0.6;

  &:hover{
    opacity: 0.9;
  }
}
.add_new_prood{
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 5px gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover{
    box-shadow: 0px 0px 5px rgba($color: #008cff, $alpha: 0.6);
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