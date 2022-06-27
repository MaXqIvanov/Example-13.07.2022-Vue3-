<template>
  <div class="block_addCar">
    <div class="block_addCar_wrapper">
      <h3>Добавить автомобиль</h3>
      <div class="block_info  mt-2">
        <label for="car_name" class="form-label">наименование автомобиля
          <input v-model="car_name" required id="car_name" class="form-control form-control-sm" type="text" placeholder="наименование автомобиля" aria-label="Пример .form-control-sm" />
        </label>
        <label for="car_type" class="form-label mt-2">выберите тип автомобиля
          <select required v-model="car_type" id="car_type" class="form-select form-select-sm" aria-label="Пример выбора по умолчанию">
            <option v-for="cur_type in type_car" :key="cur_type.id" :value="cur_type">{{cur_type.name}}</option>
          </select>
        </label> 
        <label for="car_number" class="form-label">номер автомобиля
          <input v-model="car_number" required id="car_number" class="form-control form-control-sm" type="text" placeholder="номер автомобиля" aria-label="Пример .form-control-sm" />
        </label>
        <label for="car_model" class="form-label">модель автомобиля
          <input v-model="car_model" required id="car_model" class="form-control form-control-sm" type="text" placeholder="модель автомобиля" aria-label="Пример .form-control-sm" />
        </label>
        <label for="car_color" class="form-label">цвет автомобиля
          <input v-model="car_color" required id="car_color" class="form-control form-control-sm" type="text" placeholder="цвет автомобиля" aria-label="Пример .form-control-sm" />
        </label>
        <!-- validations -->
        <div class="errors_message mt-1" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_name'">напишите название автомобиля</div>
        <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_type'">выберите тип автомобиля</div>
        <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_number'">введите номер автомобиля</div>
        <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_model'">введите модель автомобиля</div>
        <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_color'">введите цвет автомобиля</div>
        <!-- end validations -->
        <div @click="validateInputs" class="custom_btn"><input type="button" class="btn btn-primary btn-sm" value="добавить"/></div>
      </div>
      <div @click="changeIsVisibleAddCarModal" class="delete_btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";

export default defineComponent({
  name: 'AddCarModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
      car_name: '' as string,
      car_type: '' as any,
      car_number: '' as string,
      car_model: '' as string,
      car_color: '' as string,
      //pointDescription: '' as string,
    };
  },
  validations() {
    	return {
        car_name: {required},
        car_type: {required},
        car_number: {required},
        car_model: {required},
        car_color: {required},
  		}
  	},
  methods: {  
    ...mapMutations({
        changeIsVisibleAddCarModal: 'cars/changeIsVisibleAddCarModal'
    }),
    ...mapActions({
        getCarsType: 'cars/getCarsType',
        addCar: 'cars/addCar',
    }),
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
          this.addCar({
            name: this.car_name,
            type: this.car_type,
            number: this.car_number,
            model: this.car_model,
            color: this.car_color,
          })
      }
    }
  },
  computed: mapState({
      type_car: (state:any)=> state.cars.type_car
  }),
  mounted() {
    this.getCarsType()
  }
});
</script>
<style lang="scss" scoped>
.custom_btn{
    text-align: center;
}
.block_info{
    width: 100%;
    text-align: start;

    label{
        font-size: small;
        width: 100%;
    }
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
  top: -8px;
  right: -20px;
}
.block_addCar{
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
    max-height: 80vh;
    overflow-y: scroll;
}
.block_addCar_wrapper{
    height: fit-content;
    width: 96%;
    text-align: center;
    position: relative;
}
</style>