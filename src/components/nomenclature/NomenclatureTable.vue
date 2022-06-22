<template>
  <div class="prood_table">
    <div class="prood_table_wrapper">
        <table class="table table-bordered table-dark custom_table">
            <thead class="thead">
                <tr>
                    <th scope="col nomenclature_title">изображения</th>
                    <th scope="col">#</th>
                    <th scope="col">название</th>
                    <th scope="col">категория</th>
                    <th scope="col">ед.измерения</th>
                    <th scope="col">описание</th>
                </tr>
            </thead>
            <tbody >
                <tr @click="getOneNomenclature(nomenclature.id)" v-for="nomenclature in nomenclature_all" :key="nomenclature.id"
                @dblclick="navigateToOneNomenclature">
                  <td class="nomenclature_img"
                  :style="[Object.keys(nomenclature).length !== 0 ? {backgroundImage: `url(${nomenclature?.images[0]})`} : '']"></td>
                  <th :class="{'active_stroke_table': nomenclature.id == choose_nomenclature}" scope="row">{{ nomenclature?.id }}</th>
                  <td class="col-3" :class="{'active_stroke_table': nomenclature.id == choose_nomenclature}">{{ nomenclature?.name }}</td>
                  <td class="col-1" :class="{'active_stroke_table': nomenclature.id == choose_nomenclature}">{{ nomenclature?._category }}</td>
                  <td class="col-1" :class="{'active_stroke_table': nomenclature.id == choose_nomenclature}">{{ nomenclature?._measurement?.name }}</td>
                  <td class="col-7" :class="{'active_stroke_table': nomenclature.id == choose_nomenclature}">{{ nomenclature.description ? nomenclature.description : 'описание отсутсвует'}}</td>
                </tr>
            </tbody>
        </table>
        <div @click="changeIsCreateNomenclatureModal" title="предложить свою номенклатуру" class="add_new_prood bg-dark">
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
  name: 'ProodTable',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
      changeIsCreateNomenclatureModal: 'nomenclature/changeIsCreateNomenclatureModal',
    }),
    ...mapActions({
      getOneNomenclature: 'nomenclature/getOneNomenclature',
    }),
    navigateToOneNomenclature() {
      router.push(`/nomenclature/${this.choose_nomenclature}`)
    }
  },
  computed: mapState({
    nomenclature_all: (state:any)=> state.nomenclature.nomenclature_all,
    choose_nomenclature: (state:any)=> state.nomenclature.choose_nomenclature,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
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
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  background-position: center;
  background-color: rgb(255, 255, 255) !important;
  border-width: 2px;
  outline: 2px solid rgb(44, 44, 44);
  outline-offset: -2px;
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
.prood_table{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.prood_table_wrapper{
    margin-top: 15px;
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