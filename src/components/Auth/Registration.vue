<template>
  <div class="block_registration">
    <div class="block_registration_wrapper">
      <h2>Регистрация</h2>
      <form @submit.prevent>
        <div class="mb-2">
          <label for="exampleInputPhoneEmail" class="form-label">ФИО</label>
          <input required type="text" placeholder="Иванов Иван Иванович" class="form-control" id="exampleInputName"
          v-model="name">
        </div>
        <div class="mb-2">
          <label for="exampleInputPhoneEmail" class="form-label">Почта</label>
          <input required type="email" placeholder="user@email.ru" class="form-control" id="exampleInputPhoneEmail" aria-describedby="emailHelp"
          v-model="email">
          <div id="emailHelp" class="form-text">Ваша почта не будет передана сторонним лицам</div>
        </div>
        <div class="mb-2">
            <label for="passInput" class="form-label">пароль
            <input type="password" placeholder="****" class="form-control" id="passInput"
            v-model="password">
            </label>
        </div>
         <div class="mb-2 custom-label">
            <label for="confirm_passInput" class="form-label">подтвердите пароль
            <input required type="password" placeholder="****" class="form-control" id="confirm_passInput"
            v-model="confirm_password">
            </label>
            <div @click="navigate" title="зарегистрироваться в системе" class="auth_unauth">уже есть аккаунт?</div>
        </div>
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'name'">минимальная длина поля с именем 3 символа </div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'email'
        && v$.$errors[0]?.$property === 'email'">пожалуйста, введите вашу почту</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'email'">поле с почтой должно содержать минимально 4 символа</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'password'">минимальная длина поля с паролем 2 символа</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'sameAsPassword'
        && v$.$errors[0]?.$property === 'confirm_password'">пароли не совпадают друг с другом</div>
        <!-- end validate -->
        <button @click="validateInputs" type="submit" class="btn btn-primary">зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength, email, sameAs } from "@vuelidate/validators";
import router from '@/router';
export default defineComponent({
  name: 'Registration',
  props: ['changeVisibleRegistration'],
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  },
  validations() {
  		return {
        name: { required, minLength: minLength(3), maxLength: maxLength(80) },
  		  email: { required, minLength: minLength(4), maxLength: maxLength(40), email },
        password: { required, minLength: minLength(2), maxLength: maxLength(40) },
        confirm_password: { required, maxLength: maxLength(40), sameAsPassword: sameAs(this.password) },
  		}
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      user_registration: 'user/user_registration',
    }),
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.user_registration({name: this.name, email: this.email, password: this.password})
      }
    },
    navigate() {
      this.changeVisibleRegistration()
      router.push('/auth')
    },
  },
  computed: mapState({
  }),
});
</script>
<style lang="scss" scoped>
.errors_message{
  font-size: x-small;
  color: red;
  padding-bottom: 5px;
  margin-top: -10px;
}
.auth_unauth{
  color: red;
  font-size: small;
  cursor: pointer;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
}
.custom-label{
  position: relative;
}
.auth_unauth{
  position: absolute;
  bottom: 5px;
  right: 10px;
}
</style>
