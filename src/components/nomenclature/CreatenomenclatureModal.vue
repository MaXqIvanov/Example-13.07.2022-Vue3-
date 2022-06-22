<template>
  <div class="block_createNomenclature">
    <div class="block_createNomenclature_wrapper">
      <h3>Предложить номенклатур</h3>
      <!-- name
      height
      width
      long
      weight
       -->
      <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'pointDescription'">минимальная длина поля 5 символов</div>
      <input :disabled="false" @click="validateInputs" type="button" class="btn btn-primary mt-2" value="добавить точку"/>
      <div @click="changeIsCreateNomenclatureModal" class="delete_btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default defineComponent({
  name: 'CreatenomenclatureModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
    //   pointDescription: '' as string,
    };
  },
  validations() {
  		return {
        // pointDescription: { minLength: minLength(5) },
  		}
  	},
  methods: {  
    ...mapMutations({
        changeIsCreateNomenclatureModal: 'nomenclature/changeIsCreateNomenclatureModal',
    }),
    ...mapActions({
    }),
    validateInputs() {
      console.log("this is works");
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.changeIsCreateNomenclatureModal();
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
  top: 0px;
  right: -5px;
}
.block_createNomenclature{
    position: fixed;
    top: 50%;
    left: 50%;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    width: 720px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px gray;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block_createNomenclature_wrapper{
    height: 96%;
    width: 96%;
    text-align: center;
    position: relative;

}
</style>

