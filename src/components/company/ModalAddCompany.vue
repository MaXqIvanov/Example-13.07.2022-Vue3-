<template>
  <div class="block_ModalAddCompany">
    <div class="block_modal_scroll">
        <div class="block_ModalAddCompany_wrapper">
        <h3>Добавьте вашу компанию</h3>
        <form @submit.prevent id="uploadForm" name="uploadForm">
          <label for="selected_type" class="form-label">тип организации</label>
          <select required v-model="companyType" class="form-select mb-2" id="selected_type" aria-label="Пример выбора по умолчанию">
            <option selected>ООО</option>
            <option value="АО">АО</option>
            <option value="ЗАО">ЗАО</option>
            <option value="ИП">ИП</option>
            <option value="Самозанятый">Самозанятый</option>
          </select>
          <div class="mb-2">
            <label for="inputNameCompany" class="form-label">наименование компании:</label>
            <input required type="text" class="form-control" id="inputNameCompany"
            v-model="companyName">
          </div>
          <div class="mb-2">
            <label for="inputShortNameCompany" class="form-label">сокращённое наименование компании:</label>
            <input required type="text" class="form-control" id="inputShortNameCompany"
            v-model="companyShortName">
          </div>
          <div class="mb-2">
            <label for="inputInnCompany" class="form-label">ИНН:</label>
            <div class="group_checkInn">
              <input @blur="checkInn(companyINN)" required type="text" class="form-control" :class="{'is-invalid': !validInn, 'is-valid': validInn}" id="inputInnCompany"
              v-model="companyINN">
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
            <input v-on:change="onAddPhoto()" class="form-control" type="file" id="file" ref="file" required>
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyCheckingAccount" class="form-label">расчётный счёт:</label>
            <input required type="text" class="form-control" id="companyCheckingAccount"
            v-model="companyCheckingAccount">
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyNameBank" class="form-label">наименование банка:</label>
            <input required type="text" class="form-control" id="companyNameBank"
            v-model="companyNameBank">
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyBik" class="form-label">БИК:</label>
            <input required type="text" class="form-control" id="companyBik"
            v-model="companyBik">
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyCorrespondentAccount" class="form-label">корреспондентский счёт:</label>
            <input required type="text" class="form-control" id="companyCorrespondentAccount"
            v-model="companyCorrespondentAccount">
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyLegalAddress" class="form-label">юридический адрес:</label>
            <input required type="text" class="form-control" id="companyLegalAddress"
            v-model="companyLegalAddress">
          </div>
          <div v-if="companyType !== 'Самозанятый' && companyType !== ''" class="mb-2">
            <label for="companyORGN" class="form-label">ОРГН:</label>
            <input required type="text" class="form-control" id="companyORGN"
            v-model="companyORGN">
          </div>
          <div v-if="companyType == 'Самозанятый'" class="mb-2">
            <label for="сompanyFactAdress" class="form-label">фактический адрес:</label>
            <input required type="text" class="form-control" id="сompanyFactAdress"
            v-model="сompanyFactAdress">
          </div>
          <div v-if="companyType == 'Самозанятый'" class="mb-2">
            <label for="companyPersonalAccount" class="form-label">лицевой счёт:</label>
            <input required type="text" class="form-control" id="companyPersonalAccount"
            v-model="companyPersonalAccount">
          </div>
          <div class="mb-3">
            <label for="inputDescriptionCompany" class="form-label">описание компании</label>
            <textarea required v-model="companyDescription" class="form-control" id="inputDescriptionCompany" rows="3"></textarea>
          </div>
          <!-- validation groups -->
          <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyName'">поле с именем компании не должно быть более 45 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyShortName'">поле с сокращённым именем компании не должно быть более 35 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyINN'">поле с инн компании не должно быть более 30 символов</div>
          <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
          && v$.$errors[0]?.$property === 'companyDescription'">поле с описанием компании не должно быть более 170 символов</div>
          <!-- end validation groups -->
          <button @click="validateInputs" type="submit" class="btn btn-primary custom_btn_changeCompany">Отправить</button>
        </form>
        <div @click="changeIsVisibleModalAddCompany" class="close_btn"></div>
      </div>
    </div>
  </div>
</template>
<!-- v-if="companyType !== 'Самозанятый' && companyType !== ''" -->
<!-- ООО, АО(ЗАО и ОАО), ИП, ПАО, Самозанятые
Реквизиты для ООО и ИП , ЗАО : наиманование компании, ИНН/КПП, фактический адресс, Расчетный счет, наименование банка, БИК, корреспондентский счет, юр. адрес, ОГРН
Для Самозанятого : лицевовый счёт, наиманование компании, инн, фактический адресс, описание компании -->
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import { ref } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie'
// import validate_approve from '../../assets/validate_approve.svg';
// import validate_error from '../../assets/validate-error.svg';

export default defineComponent({
  name: 'ModalAddCompany',
  props: ['isVisibleModalAddCompany', 'changeIsVisibleModalAddCompany'],
  components: {
  },
  setup() {
    // return { validate_approve, validate_error }
  },
  data() {
    return {
      v$: useValidate(),
      companyType: '',
      companyName: '',
      companyShortName: '',
      companyINN: '',
      file: '' as any,
      companyDescription: '',
      companyCheckingAccount: '',  //Расчётный счёт
      companyNameBank: '',        
      companyBik: '',       
      companyCorrespondentAccount: '',
      companyLegalAddress: '',    //Юридический адресс
      companyORGN: '',
      сompanyFactAdress: '',
      companyPersonalAccount: '',
      // 
    };
  },
  validations() {
    if(this.companyType == 'Самозанятый') {
      	return {
        companyType: { required },
  		  companyName: { required, maxLength: maxLength(45) },
        companyShortName: { required, maxLength: maxLength(35)},
        companyINN: { required, maxLength: maxLength(30)},
        file: { required },
        companyDescription: { required, maxLength: maxLength(170) },
        companyPersonalAccount: { required },
        сompanyFactAdress: { required },
      }
    }
    else {
      return {
        companyType: { required },
  		  companyName: { required, maxLength: maxLength(45) },
        companyShortName: { required, maxLength: maxLength(35)},
        companyINN: { required, maxLength: maxLength(30)},
        file: { required },
        companyDescription: { required, maxLength: maxLength(170) },
        companyCheckingAccount: { required },
        companyNameBank: { required },
        companyBik: { required },
        companyCorrespondentAccount: { required },
        companyLegalAddress: { required },
        companyORGN: { required },
      }
     }
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      createCompany: 'company/createCompany',
      checkInn: 'company/checkInn',
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
        if(this.companyType == 'Самозанятый'){
          formData.append('img', this.file);
          formData.append('company_type', this.companyType);
          formData.append('full_name', this.companyName);
          formData.append('short_name', this.companyShortName);
          formData.append('inn', this.companyINN);
          formData.append('description', this.companyDescription);
          formData.append('personal_account', this.companyPersonalAccount);
          formData.append('fact_address', this.сompanyFactAdress);
        }
        else {
          formData.append('img', this.file);
          formData.append('company_type', this.companyType);
          formData.append('full_name', this.companyName);
          formData.append('short_name', this.companyShortName);
          formData.append('inn', this.companyINN);
          formData.append('description', this.companyDescription);
          formData.append('checking_account', this.companyCheckingAccount);
          formData.append('bank_nae', this.companyNameBank);
          formData.append('bik', this.companyBik);
          formData.append('correspondent_account', this.companyCorrespondentAccount);
          formData.append('legal_address', this.companyLegalAddress);
          formData.append('ogrn', this.companyORGN);
        }
        this.createCompany(formData)
        //https://si-dev.com/ru/blog/laravel-vue-file-uploads
      }
    }
  },
  computed: mapState({
    validInn: (state:any)=> state.company.validInn,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.custom_invalid{
  margin-left: 20px;
}
.group_checkInn{
  display: flex;
  align-items: center;
}
.custom_btn_changeCompany{
  margin-top: 5px;
}
.block_ModalAddCompany{
    position: fixed;
    top: 50%;
    left: calc(50% + 47px);
    width: 700px;
    min-height: 300px;
    min-width: 450px;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0px 0px 5px gray;
    padding: 15px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:550px){
        min-width: 97%;
    }
    z-index: 999;
}
.block_ModalAddCompany_wrapper{
  height: 100%;
  width: 94%;
  max-height: 86vh;
}
.block_modal_scroll{
  height: 100%;
  width: 96%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
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
    opacity: 0.5;
    transition: all 0.25s linear;
    &:hover{
      opacity: 0.7;
    }
}
.errors_message{
  margin-top: -10px;
  color: red;
  font-size: x-small
}
</style>
