<template>
  <div class="block_authModal">
    <div class="block_authModal_wrapper">
      <h2>Войти</h2>
      <form @submit.prevent>
        <div class="mb-2">
          <label for="exampleInputPhoneEmail" class="form-label">Почта</label>
          <input required type="email" placeholder="user@email.ru" class="form-control" id="exampleInputPhoneEmail" aria-describedby="emailHelp"
          v-model="email">
        </div>
        <div class="mb-2 custom-label">
            <label for="passInput" class="form-label">пароль
            <input type="password" placeholder="****" class="form-control" id="passInput"
            v-model="password">
            <div @click="navigate" title="войти в систему" class="auth_unauth">нет аккаунта?</div>
            </label>
        </div>
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'email'">поле с почтой обязательно для заполнения</div>
          <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'email'
        && v$.$errors[0]?.$property === 'email'">пожалуйста, введите вашу почту</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'email'">поле с почтой должно содержать минимально 4 символа</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'password'">минимальная длина пароля 2 символа</div>
        <!-- end validate -->
        <button @click="validateInputs" type="submit" class="btn btn-primary">Войти</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
import router from '@/router';
export default defineComponent({
  name: 'AuthModal',
  props: ['changeVisibleRegistration'],
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: '',
    };
  },
  validations() {
  		return {
  			email: { required, minLength: minLength(4), maxLength: maxLength(40), email },
        password: { required, minLength: minLength(2), maxLength: maxLength(40) }
  		}
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      createProfile: 'user/createProfile'
    }),
    validateInputs() {
      this.v$.$validate()
      console.log(this.v$.$errors);
      if(this.v$.$error) {
      } else {
        this.createProfile({email: this.email, password: this.password})
      }
    },
    navigate() {
      this.changeVisibleRegistration()
      router.push('/registration')
    }
  },
  computed: mapState({
  }),
  mounted() {}
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
