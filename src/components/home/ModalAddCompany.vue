<template>
  <div class="block_ModalAddCompany">
    <div class="block_ModalAddCompany_wrapper">
      <h3>Добавьте вашу компанию</h3>
      <form @submit.prevent>
        <div class="mb-2">
          <label for="inputNameCompany" class="form-label">имя компании:</label>
          <input required type="text" class="form-control" id="inputNameCompany" aria-describedby="nameCompanyHelp"
          v-model="companyName">
        </div>
         <div class="mb-2">
          <label for="inputShortNameCompany" class="form-label">сокращённое имя компании:</label>
          <input required type="text" class="form-control" id="inputShortNameCompany" aria-describedby="nameCompanyHelp"
          v-model="companyShortName">
        </div>
         <div class="mb-2">
          <label for="inputInnCompany" class="form-label">ИНН компании:</label>
          <input required type="text" class="form-control" id="inputInnCompany" aria-describedby="nameCompanyHelp"
          v-model="companyINN">
        </div>
         <div class="mb-2">
          <label for="inputLogoCompany" class="form-label">логотип компании:</label>
          <input required type="text" class="form-control" id="inputLogoCompany" aria-describedby="nameCompanyHelp"
          v-model="companyLogo">
        </div>
        <div class="mb-3">
          <label for="inputDescriptionCompany" class="form-label">описание компании</label>
          <textarea required v-model="companyDescription" class="form-control" id="inputDescriptionCompany" rows="3"></textarea>
        </div>
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'name'">поле с именем компании обязательно для заполнения</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'name'">поле с именем компании не должно быть более 35 символов</div>
        <button @click="validateInputs" type="submit" class="btn btn-primary">Отправить</button>
      </form>
      <div @click="changeIsVisibleModalAddCompany" class="close_btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default defineComponent({
  name: 'ModalAddCompany',
  props: ['isVisibleModalAddCompany', 'changeIsVisibleModalAddCompany'],
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      companyName: '',
      companyShortName: '',
      companyINN: '',
      companyLogo: '',
      companyDescription: '',
    };
  },
  validations() {
  		return {
  		  companyName: { required, maxLength: maxLength(35) },
  		}
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
    validateInputs() {
      this.v$.$validate()
      console.log(this.v$.$errors);
      if(this.v$.$error) {
      } else {
        //   this work any methods
      }
    }
  },
  computed: mapState({
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.block_ModalAddCompany{
    position: fixed;
    top: 50%;
    left: 50%;
    min-height: 300px;
    min-width: 450px;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0px 0px 5px gray;
    padding: 15px;
    border-radius: 25px;

    @media(max-width:550px){
        min-width: 97%;
    }
    z-index: 999;
}
.close_btn{
    background-image: url('../../assets/close_btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 20px;
    width: 20px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
}
</style>
