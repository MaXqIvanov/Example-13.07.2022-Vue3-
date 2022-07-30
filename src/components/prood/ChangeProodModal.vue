<template>
  <div class="block_changePoint">
    <div class="block_changePoint_wrapper">
      <h3 class="text-center">Редактироать товар</h3>
        <div @click="changeChangeModal" class="delete_btn"></div>
        <div class="mt-2">номенклатура товара : {{prood_one._nomenclature}}</div>
        <label for="current_count" class="form-label mt-2">количество товаров</label>
        <input v-model="current_count" min="1" class="form-control" type="number" id="current_count" aria-label="Пример"/>
        <label for="current_price" class="form-label mt-2">цена за единицу товара, ₽ </label>
        <input v-model="current_price" min="1" class="form-control" type="number" id="current_price" aria-label="Пример"/>
        <div class="errors_message mt-2" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'current_count'">поле цена за ед. товара обязательно для заполнения</div>
        <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'current_price'">поле количество товаров обязательно для заполнения</div>
        <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
        && v$.$errors[0]?.$property === 'current_count'">число не может быть отрицательным</div>
        <div class="errors_message mt-2" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
        && v$.$errors[0]?.$property === 'current_price'">число не может быть отрицательным</div>
        <div class="d-flex justify-content-center"><input @click="validateInputs" type="button" class="btn btn-primary mt-2" value="сохранить изменения"/></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";

export default defineComponent({
  name: 'ChangeProodModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
      current_price: 0 as number,
      current_count: 0 as number,
    };
  },
  validations() {
  		return {
        current_price: { required, numeric },
        current_count: { required, numeric },
  		}
  	},
  methods: {  
    ...mapMutations({
      changeChangeModal: 'proods/changeChangeModal',
    }),
    ...mapActions({
      changeProod: 'proods/changeProod',
    }),
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.changeProod({
            cost: this.current_price,
            count: this.current_count,
        })
      }
    },
    setData() {
     // this.pointDescription = this.point_one.description
     this.current_price = this.prood_one.cost,
     this.current_count = this.prood_one.count
    },
  },
  computed: mapState({
      prood_one: (state:any)=> state.proods.prood_one,
  }),
   watch: {
   },
  mounted() {
    this.setData()
  }
});
</script>
<style lang="scss" scoped>
.block_info{
    text-align: left;
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
.block_changePoint{
    position: fixed;
    top: 50%;
    left: 50%;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    width: 720px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px gray;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block_changePoint_wrapper{
    height: 96%;
    width: 96%;
    position: relative;
    
}
</style>
