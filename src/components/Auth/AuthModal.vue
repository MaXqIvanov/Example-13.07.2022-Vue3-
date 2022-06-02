<template>
  <div class="block_authModal">
    <div class="block_authModal_wrapper">
      <h2>Войти</h2>
      <form @submit.prevent>
        <div class="mb-2">
          <label for="exampleInputPhoneNumber" class="form-label">Номер телефона</label>
          <input required type="number" placeholder="+7-(___)-___-__-__" class="form-control" id="exampleInputPhoneNumber" aria-describedby="phoneHelp"
          v-model="phone">
          <div id="emailHelp" class="form-text">Ваш телефон не будет передан сторонним лицам</div>
          <div class="errors_message" v-if="v$.$error">пожалуйста перепроверьте ваш телефон</div>
        </div>
        <div class="mb-2">
            <label for="codeInput" class="form-label">Код
            <input :disabled="!formStageHolder" type="number" placeholder="****" class="form-control" id="codeInput"
            v-model="code">
            </label>
        </div>
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
      phone: '',
      code: '',
    };
  },
  validations() {
  		return {
  			phone: { required, minLength: minLength(11), maxLength: maxLength(13) },
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
      if(this.v$.$error) {
      } else {
        this.createProfile({phone: this.phone, code: this.code})
      }
    }
  },
  computed: mapState({
    formStageHolder: (state:any)=> state.user.formStageHolder,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.errors_message{
  font-size: x-small;
  color: red;
}
</style>
