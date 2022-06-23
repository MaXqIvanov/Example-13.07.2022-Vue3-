<template>
  <div class="prood_table">
    <div class="prood_table_wrapper">
      <!-- table-hover -->
        <table class="table table-bordered table-dark custom_table">
            <thead class="thead">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">наименование</th>
                    <th scope="col">стоимость</th>
                    <th scope="col">количество</th>
                    <th scope="col">адресс</th>
                </tr>
            </thead>
            <tbody >
                <tr @click="isDelete && getOneProod(prood)" v-for="prood in proods_all" :key="prood.id"
                @dblclick="navigateToOneProod">
                <th :class="{'active_stroke_table': prood.id == choise_prood}" scope="row">{{ prood.id }}</th>
                <td class="col-5" :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood._nomenclature }}</td>
                <td :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood.cost }}</td>
                <td class="prood_count" :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood.count }}</td>
                <td class="col-7 shop_address" :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood?._shop?.address ? prood?._shop?.address : 'адрес не установлен'}}
                <span v-if="isVisibleMyProod && proods_user.length > 0" @mouseleave="changeIsDelete"
                  @mouseenter="changeIsDelete" title="удалить товар" @click="deteteMyProod(prood)"
                  class="delete_btn"></span></td>
                </tr>
            </tbody>
        </table>
        <div @click="changeIsCreateProodModal" title="добавить новый товар" class="add_new_prood bg-dark">
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
      isDelete: true as boolean,
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
      changeIsCreateProodModal: 'proods/changeIsCreateProodModal',
    }),
    ...mapActions({
      getOneProod: 'proods/getOneProod',
      deteteMyProod: 'proods/deteteMyProod',
    }),
    navigateToOneProod() {
      router.push(`/prood/${this.choise_prood}`)
    },
    changeIsDelete(){
      this.isDelete = !this.isDelete;
    }
  },
  computed: mapState({
    proods_all: (state:any)=> state.proods.proods_all,
    choise_prood: (state:any)=> state.proods.choise_prood,
    isVisibleMyProod: (state:any)=> state.proods.isVisibleMyProod,
    proods_user: (state:any)=> state.proods.proods_user,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.shop_address{
  position: relative;
}
.delete_btn{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 15px;
  width: 15px;
  opacity: 0.5;
  background-image: url('../../assets/close_btn.svg');
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s linear;
  &:hover{
    opacity:0.75;
  }
}
.custom_table{
  border-radius: 5px !important;
  overflow:hidden;
  cursor: pointer;
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
<style lang="scss">

</style>