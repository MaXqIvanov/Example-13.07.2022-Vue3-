<template>
  <div class="prood_table">
    <div class="prood_table_wrapper">
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
                <tr @click="getOneProod(prood)" v-for="prood in proods_all" :key="prood.id"
                @dblclick="navigateToOneProod">
                <th :class="{'active_stroke_table': prood.id == choise_prood}" scope="row">{{ prood.id }}</th>
                <td :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood._nomenclature }}</td>
                <td :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood.cost }}</td>
                <td :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood.count }}</td>
                <td :class="{'active_stroke_table': prood.id == choise_prood}">{{ prood._shop.address }}</td>
                </tr>
            </tbody>
        </table>
        <div title="добавить новый товар" class="add_new_prood">
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
    }),
    ...mapActions({
      getOneProod: 'proods/getOneProod',
    }),
    navigateToOneProod() {
      router.push(`/prood/${this.choise_prood}`)
    }
  },
  computed: mapState({
    proods_all: (state:any)=> state.proods.proods_all,
    choise_prood: (state:any)=> state.proods.choise_prood,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
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
  background: rgb(0, 253, 211);
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