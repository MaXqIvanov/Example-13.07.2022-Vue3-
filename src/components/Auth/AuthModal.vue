<template>
  <div class="block_authModal">
    <div class="block_authModal_wrapper">
      <h2>Войти</h2>
      <form @submit.prevent>
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
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'email'">поле с почтой обязательно для заполнения</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'email'">поле с почтой должно содержать минимально 4 символа</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'password'">поле пароль обязательно для заполнения</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'password'">минимальная длина пароля 2 символа</div>
        <button @click="validateInputs" type="submit" class="btn btn-primary">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
export default defineComponent({
  name: 'AuthModal',
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
  			email: { required, minLength: minLength(4), maxLength: maxLength(40) },
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
</style>
