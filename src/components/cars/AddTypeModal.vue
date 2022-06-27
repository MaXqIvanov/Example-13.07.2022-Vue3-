<template>
  <div class="block_addType">
    <div class="block_addType_wrapper">
      <h3>Добавить тип автомобиля</h3>
      <div class="block_info  mt-2">
        <label for="type_name" class="form-label">тип автомобиля
          <input v-model="type_name" required id="type_name" class="form-control form-control-sm" type="text" placeholder="тип автомобиля" aria-label="Пример .form-control-sm" />
        </label>
        <!-- validations -->
        <!-- <div class="errors_message mt-1" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_name'">напишите название автомобиля</div>
        <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'car_type'">выберите тип автомобиля</div> -->
        <!-- end validations -->
        <div @click="validateInputs" class="custom_btn"><input type="button" class="btn btn-primary btn-sm" value="добавить"/></div>
      </div>
      <div @click="changeIsVisibleAddTypeModal" class="delete_btn"></div>
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
      type_name: '' as string,
      //pointDescription: '' as string,
    };
  },
  validations() {
    	return {
        type_name: {required},
  		}
  	},
  methods: {  
    ...mapMutations({
        changeIsVisibleAddCarModal: 'cars/changeIsVisibleAddCarModal',
        changeIsVisibleAddTypeModal: 'cars/changeIsVisibleAddTypeModal',
    }),
    ...mapActions({
        getCarsType: 'cars/getCarsType',
        addCar: 'cars/addCar',
    }),
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        console.log(this.type_name);
      }
    }
  },
  computed: mapState({
  }),
  mounted() {
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
.block_addType{
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
.block_addType_wrapper{
    height: fit-content;
    width: 96%;
    text-align: center;
    position: relative;
}
</style>