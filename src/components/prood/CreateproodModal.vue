<template>
  <div class="block_createProod">
    <div class="block_createProod_wrapper">
      <h3>Добавить товар</h3>
      <div class="block_createProod_info">
          <label for="current_company" class="form-label mt-2">ваша компания или партнёр</label>
          <select @change="getUserPoint(current_company)" v-model="current_company" id="current_company" class="form-select" aria-label="Пример выбора по умолчанию">
            <option v-for="partner in user_company" :key="partner.id" :value="partner">{{partner._company}}</option>
          </select>
          <label for="current_point" class="form-label mt-2">выберите точку выдачи</label>
          <select v-model="current_point" id="current_point" class="form-select" aria-label="Пример выбора по умолчанию">
            <option v-for="point in user_point" :key="point.id" :value="point">{{point._shop}}</option>
          </select>
          <label for="current_nomenclature" class="form-label mt-2">выберите одну из предложенных номенклатур</label>
          <select v-model="current_nomenclature" id="current_nomenclature" class="form-select" aria-label="Пример выбора по умолчанию">
            <option v-for="nomenclature in user_nomenclature" :key="nomenclature.id" :value="nomenclature">{{nomenclature.name}}</option>
          </select>
          <div v-if="!isExcel" class="group_label_count">
            <label for="current_count" class="form-label mt-2">количество товаров
            <input v-model="current_count" min="1" class="form-control" type="number" id="current_count" aria-label="Пример"/>
            </label>
            <label for="current_price" class="form-label mt-2">цена за единицу товара, ₽
            <input v-model="current_price" min="1" class="form-control" type="number" id="current_price" aria-label="Пример"/>
            </label>
          </div> 
          <div class="mt-2" v-if="isExcel">
            <label for="prood_excel" class="form-label">загрузите файл Excel</label>
            <input v-on:change="onAddExcel()" class="form-control" type="file" id="prood_excel" ref="prood_excel" required>
          </div>
      </div>
      <div class="errors_message mt-2" v-if="v$?.$errors[0]?.$validator === 'required'
      && v$.$errors[0]?.$property === 'current_point'">выберите точку выдачи</div>
      <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'required'
      && v$.$errors[0]?.$property === 'current_nomenclature'">выберите номенклатуру</div>
      <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'current_count'">число не может быть отрицательным</div>
      <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'current_price'">число не может быть отрицательным</div>
      <input v-if="!isExcel" @click="validateInputs" :disabled="false" placeholder="выберите точку выдачи" type="button" class="btn btn-primary mt-2 mb-2" value="добавить товар"/>
      <input v-if="isExcel" @click="validateInputs" :disabled="false" placeholder="выберите точку выдачи" type="button" class="btn btn-primary mt-3 mb-2" value="загрузить Excel"/>
      <div class="close_modal_window" @click="changeIsCreateProodModal"></div>
      <div class="form-check form-switch change_method_add_prood">
        <input v-model="isExcel" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Excel</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";

export default defineComponent({
  name: 'CreateproodModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
      current_company: '' as any,
      current_point: '' as any,
      current_nomenclature: '' as any,
      current_count: 1 as any,
      current_price: 1 as number,
      isExcel: false as boolean,
      prood_excel: '' as any,
      //pointDescription: '' as string,
    };
  },
  validations() {
    if(!this.isExcel){
    	return {
        current_point: {required},
        current_nomenclature: {required},
        current_count: {numeric},
        current_price: {numeric},
  		}
    }
    else{
      	return {
        current_point: {required},
        current_nomenclature: {required},
        prood_excel: {required},
  		}
    }
  	},
  methods: {  
    ...mapMutations({
        changeIsCreateProodModal: 'proods/changeIsCreateProodModal'
    }),
    ...mapActions({
        getUserProod: 'proods/getUserProod',
        createNewProod: 'proods/createNewProod',
        getUserPoint: 'proods/getUserPoint',
    }),
    onAddExcel(){
      let excel:any = this.$refs.prood_excel
      this.prood_excel = excel.files[0];
      console.log(this.prood_excel);
    },
    validateInputs() {
      this.v$.$validate()
      console.log(this.v$.$error);
      
      if(this.v$.$error) {
      } else {
          this.createNewProod({company: this.current_company, shop: this.current_point, nomenclature: this.current_nomenclature, count: this.current_count,
          cost: this.current_price})
      }
    }
  },
  computed: mapState({
    isCreateProodModal: (state:any)=> state.proods.isCreateProodModal,
    user_nomenclature: (state:any)=> state.proods.user_nomenclature,
    user_partner: (state:any)=> state.proods.user_partner,
    user_point: (state:any)=> state.proods.user_point,
    user_company: (state:any)=> state.proods.user_company,
  }),
  mounted() {
      this.getUserProod()
  }
});
</script>
<style lang="scss" scoped>
.group_label_count{
  display: flex;
  justify-content: space-around;
}
.change_method_add_prood{
  position: absolute;
  top: 0px;
  left: 0px;
  color: green;
}
.block_createProod_info{
    text-align: left;
}
.close_modal_window{
    position: absolute;
    top: -5px;
    right: -15px;
    height: 20px;
    width: 20px;
    background: url('../../assets/close_btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    opacity: 0.6;
    &:hover{
        opacity: 0.8;
    }
}
.errors_message{
  font-size: x-small;
  color: red;
  padding-bottom: 5px;
  margin-top: -10px;
  text-align: start;
}
.delete_btn{
  background: url('../../assets/close_btn.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
  cursor: pointer;
  opacity: 0.6;
  &:hover{
    opacity: 0.8;
  }
  position: absolute;
  top: 0px;
  right: -5px;
}
.block_createProod{
    position: fixed;
    top: 50%;
    left: 50%;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    width: 620px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px gray;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block_createProod_wrapper{
    height: fit-content;
    width: 96%;
    text-align: center;
    position: relative;
}
</style>