<template>
    <div class="block_changeCompany">
      <div class="block_changeCompany_wrapper">
        <h4>Изменить данные компании</h4>
         <form @submit.prevent id="uploadForm" name="uploadForm">
          <div class="mb-2">
            <label for="inputNameCompany" class="form-label">наименование компании:</label>
            <input :placeholder="one_company.full_name" type="text" class="form-control" id="inputNameCompany"
            v-model="full_name">
          </div>
          <div class="mb-2">
            <label for="inputShortNameCompany" class="form-label">сокращённое наименование компании:</label>
            <input type="text" class="form-control" id="inputShortNameCompany"
            v-model="short_name">
          </div>
          <div class="mb-2">
            <label for="inputInnCompany" class="form-label">ИНН:</label>
            <div class="group_checkInn">
              <input @blur="checkInn(inn)" type="text" class="form-control" :class="{'is-invalid': !validInn, 'is-valid': validInn}" id="inputInnCompany"
              v-model="inn">
              <div id="validationServerinputInnCompany" class="invalid-feedback custom_invalid">
              инн не действителен
              </div>
              <div id="validationServerinputInnCompany" class="valid-feedback custom_invalid">
              инн действителен
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="file" class="form-label">загрузите логотип компании</label>
            <input v-on:change="onAddPhoto()" class="form-control" type="file" id="file" ref="file">
          </div>
         
          <div class="mb-3">
            <label for="inputDescriptionCompany" class="form-label">описание компании</label>
            <textarea v-model="description" class="form-control" id="inputDescriptionCompany" rows="4"></textarea>
          </div>
          <!-- validation groups -->
          <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyName'">поле с именем компании не должно быть более 45 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyShortName'">поле с сокращённым именем компании не должно быть более 35 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyINN'">поле с инн компании не должно быть более 30 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyDescription'">поле с описанием компании не должно быть более 400 символов</div>
          <!-- end validation groups -->
          <button @click="validateInputs" type="submit" class="btn btn-primary custom_btn_changeCompany">Отправить</button>
        </form>
        <div @click="ChangeCompanyVisible" class="close_btn"></div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";



export default defineComponent({
  name: 'ModalChangeCompany',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      //companyType: '',
      full_name: '' as string,
      short_name: '' as string,
      inn: '' as string,
      file: '' as any,  //img
      description: '' as string,
      // 
    };
  },
  validations() {
      return {
      //companyType: { required },
  		full_name: { maxLength: maxLength(45) },
      short_name: { maxLength: maxLength(35)},
      inn: { maxLength: maxLength(30)},
      file: {  },
      description: { maxLength: maxLength(400) },
      }
  	},
  setup() {
    return {  }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      ChangeCompanyVisible: 'company/ChangeCompanyVisible',
      checkInn: 'company/checkInn',
      changeCompany: 'company/changeCompany',
    }),
    onAddPhoto () {
      let image:any = this.$refs.file
      this.file = image.files[0];
      console.log(this.file);
       // this.companyLogo = e.target.files[0]
    },
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error && this.validInn) {
      } else {
        let formData = new FormData();
          if(this.file){
            formData.append('img', this.file);
          }
          formData.append('full_name', this.full_name);
          formData.append('short_name', this.short_name);
          formData.append('inn', this.inn);
          formData.append('description', this.description);
          this.changeCompany(formData)
      }
    },
    setData() {
      this.full_name = this.one_company.full_name,
      this.short_name = this.one_company.short_name,
      this.inn = this.one_company.inn,
      this.description = this.one_company.description
    },
  },
  computed: mapState({
    validInn: (state:any)=> state.company.validInn,
    one_company: (state:any)=> state.company.one_company,
  }),
  mounted() {
    this.setData()
  }
});
</script>
<style lang="scss" scoped>
textarea{
  resize: none !important;
  font-size: small !important;
}
textarea::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
  }
textarea::-webkit-scrollbar-track {
    background: rgb(209, 209, 209); /* цвет дорожки */
    border-radius: 25px;
  }
textarea::-webkit-scrollbar-thumb {
    background-color: #84d1fd; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #84d1fd; /* padding вокруг плашки */
  }
    .block_changeCompany{
        height: 600px;
        width: 400px;
        box-shadow: 0px 0px 5px gray;
        border-radius: 10px;
        background: white;
        position: fixed;
        top: 50%;
        left: calc(50% + 47px);
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center ;
    }
    .block_changeCompany_wrapper{
      width: 96%;
      height: 96%;
      font-family: 'Montserrat', sans-serif;
      position: relative;
    }
    .close_btn{
      background-image: url('../../assets/close_btn.svg');
      height: 20px;
      width: 20px;
      position: absolute;
      top: -7px;
      right: -3px;
      cursor: pointer;
      opacity: 0.6;
      &:hover{
        opacity: 0.8;
      }
    }
</style>
