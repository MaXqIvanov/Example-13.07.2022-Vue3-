<template>
  <div class="block_ModalAddCompany">
    <div class="block_ModalAddCompany_wrapper">
      <h3>Добавьте вашу компанию</h3>
      <form @submit.prevent id="uploadForm" name="uploadForm">
        <div class="mb-2">
          <label for="inputNameCompany" class="form-label">имя компании:</label>
          <input required type="text" class="form-control" id="inputNameCompany"
          v-model="companyName">
        </div>
         <div class="mb-2">
          <label for="inputShortNameCompany" class="form-label">сокращённое имя компании:</label>
          <input required type="text" class="form-control" id="inputShortNameCompany"
          v-model="companyShortName">
        </div>
         <div class="mb-2">
          <label for="inputInnCompany" class="form-label">ИНН компании:</label>
          <input required type="text" class="form-control" id="inputInnCompany"
          v-model="companyINN">
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Загрузите логотип компании</label>
          <input @change="onAddPhoto" class="form-control" type="file" id="formFile" multiple required>
        </div>
        <div class="mb-3">
          <label for="inputDescriptionCompany" class="form-label">описание компании</label>
          <textarea required v-model="companyDescription" class="form-control" id="inputDescriptionCompany" rows="3"></textarea>
        </div>
        <!-- validation groups -->
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'companyName'">поле с именем компании не должно быть более 35 символов</div>
         <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'companyShortName'">поле с сокращённым именем компании не должно быть более 35 символов</div>
         <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'companyINN'">поле с инн компании не должно быть более 30 символов</div>
         <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'companyDescription'">поле с описанием компании не должно быть более 170 символов</div>
        <!-- end validation groups -->
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
      companyLogo: '' as any,
      companyDescription: '',
    };
  },
  validations() {
  		return {
  		  companyName: { required, maxLength: maxLength(35) },
        companyShortName: { required, maxLength: maxLength(35)},
        companyINN: { required, maxLength: maxLength(30)},
        companyLogo: { required },
        companyDescription: { required, maxLength: maxLength(170) }
  		}
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      addNewCompany: 'user/addNewCompany',
    }),
    onAddPhoto (e:any) {
        this.companyLogo = e.target.files[0]
    },
    validateInputs() {
      this.v$.$validate()
      console.log(this.v$.$errors);
      if(this.v$.$error) {
      } else {
        this.addNewCompany({full_name:this.companyName,
        short_name:this.companyShortName, inn: this.companyINN,
        img: this.companyLogo, description: this.companyDescription})

        //https://si-dev.com/ru/blog/laravel-vue-file-uploads
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
    top: 7px;
    right: 7px;
    opacity: 0.6;

    &:hover{
      opacity: 0.8;
    }
}
.errors_message{
  margin-top: -10px;
  color: red;
  font-size: x-small
}
</style>
