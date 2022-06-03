<template>
  <div class="block_changeModal">
    <div class="block_changeModal_wrapper">
      <h2>{{$props.title}}</h2>
      <form @submit.prevent>
        <div class="mb-2">
          <label for="inputChangeName" class="form-label">Ваше имя:</label>
          <input required type="text" class="form-control" id="inputChangeName" aria-describedby="nameHelp"
          v-model="name">
        </div>
        <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'required'
        && v$.$errors[0]?.$property === 'name'">поле с именем обязательно для заполнения</div>
        <div class="errors_message" v-else-if="v$?.$errors[0]?.$validator === 'maxLength'
        && v$.$errors[0]?.$property === 'name'">поле с именем не должно быть более 25 символов</div>
        <button @click="validateInputs" type="submit" class="btn btn-primary">Отправить</button>
      </form>
      <div @click="changeVisibleModal(false)" class="close_btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
export default defineComponent({
  name: 'ModalChange',
  props: ['title', 'changeVisibleModal'],
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      name: '',
    };
  },
  validations() {
  		return {
  		  name: { required, maxLength: maxLength(25) },
  		}
  	},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
        changeNameProfileUser: 'user/changeNameProfileUser'
    }),
    validateInputs() {
      this.v$.$validate()
      console.log(this.v$.$errors);
      if(this.v$.$error) {
      } else {
        this.changeNameProfileUser({name: this.name})
      }
    }
  },
  computed: mapState({
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.block_changeModal{
    background: white;
    box-shadow: 0px 0px 5px gray;
    max-width: 350px;
    min-width: 350px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.block_changeModal_wrapper{
    width: 90%;
    height: 90%;
}
.close_btn{
    height: 25px;
    width: 25px;
    background: url('../../assets/close_btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 5px;
    right: 5px;
    opacity: 0.6;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
}
</style>
