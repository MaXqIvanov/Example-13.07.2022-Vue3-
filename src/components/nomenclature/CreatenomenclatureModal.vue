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
      <label for="nomenclature_name" class="form-label mt-2">наименование номенклатуры</label>
      <input v-model="nomenclature_name" class="form-control" type="text" id="nomenclature_name" aria-label="Пример" required/>
      <div class="block_with_parames mt-2">
        <label for="nomenclature_height" class="form-label">высота
        <input v-model="nomenclature_height" min="1" class="form-control" type="number" id="nomenclature_height" aria-label="Пример"/>
        </label>
        <label for="nomenclature_long" class="form-label">длина
        <input v-model="nomenclature_long" min="1" class="form-control" type="number" id="nomenclature_long" aria-label="Пример"/>
        </label>
        <label for="nomenclature_width" class="form-label">ширина
        <input v-model="nomenclature_width" min="1" class="form-control" type="number" id="nomenclature_width" aria-label="Пример"/>
        </label>
         <label for="nomenclature_weight" class="form-label">вес
        <input v-model="nomenclature_weight" min="1" class="form-control" type="number" id="nomenclature_weight" aria-label="Пример"/>
        </label>
      </div>
      <div v-if="visibleAddPhoto" class="mt-2">
        <label for="nomenclature_photo" class="form-label">загрузить фото номенклатуры</label>
        <input v-on:change="onAddPhoto()" class="form-control" type="file" id="nomenclature_photo" ref="nomenclature_photo">
      </div>
      <div class="errors_message mt-1" v-if="v$?.$errors[0]?.$validator === 'minLength'
      && v$.$errors[0]?.$property === 'nomenclature_name'">минимальная длина поля 2 символов</div>
      <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'nomenclature_height'">высота не может быть отрицательной</div>
      <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'nomenclature_long'">длина не может быть отрицательной</div>
      <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'nomenclature_width'">ширина не может быть отрицательной</div>
      <div class="errors_message mt-1" v-else-if="v$?.$errors[0]?.$validator === 'numeric'
      && v$.$errors[0]?.$property === 'nomenclature_weight'">вес не может быть отрицательный</div>
      <div v-if="!visibleAddPhoto" class="block_for_btn mt-2"><input :disabled="false" @click="validateInputs" type="button" class="btn btn-primary mt-2" value="предложить номенклатуру"/></div>
      <div v-if="visibleAddPhoto" class="block_for_btn mt-2"><input :disabled="false" @click="sendPhoto" type="button" class="btn btn-primary mt-2" value="отправить фото на проверку"/></div>
      <div @click="changeIsCreateNomenclatureModal" class="delete_btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";

export default defineComponent({
  name: 'CreatenomenclatureModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
      nomenclature_name: '' as string,
      nomenclature_height: 1 as number,
      nomenclature_long: 1 as number,
      nomenclature_width: 1 as number,
      nomenclature_weight: 1 as number,
      nomenclature_photo: '' as any,
    };
  },
  validations() {
  		return {
        nomenclature_name: {required, minLength: minLength(2) },
        nomenclature_height: {numeric},
        nomenclature_width: {numeric},
        nomenclature_long: {numeric},
        nomenclature_weight: {numeric},
  		}
  	},
  methods: {  
    ...mapMutations({
        changeIsCreateNomenclatureModal: 'nomenclature/changeIsCreateNomenclatureModal',
    }),
    ...mapActions({
        CreateNomenclature: 'nomenclature/CreateNomenclature',
        addPhotoNomenclature: 'nomenclature/addPhotoNomenclature',
    }),
    validateInputs() {
      console.log("this is works");
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.CreateNomenclature({
          name: this.nomenclature_name,
          height: this.nomenclature_height,
          width: this.nomenclature_width,
          long: this.nomenclature_long,
          weight: this.nomenclature_weight,
        });
      }
    },
    onAddPhoto () {
      let image:any = this.$refs.nomenclature_photo
      this.nomenclature_photo = image.files[0];
      console.log(this.nomenclature_photo);
    },
    sendPhoto(){
      let formData = new FormData();
      formData.append('photo', this.nomenclature_photo);
      formData.append('nomenclature_suggest', this.nomenclature_suggest);
      this.addPhotoNomenclature({formData})
    }
  },
  computed: mapState({
    visibleAddPhoto: (state:any)=> state.nomenclature.visibleAddPhoto,
    nomenclature_suggest: (state:any)=> state.nomenclature.nomenclature_suggest,
  }),
  mounted() {
  }
});
</script>
<style lang="scss" scoped>
.block_with_parames{
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  column-gap: 1.33339%;
  width: 100%;
}
.block_for_btn{
  width: 100%;
  display: flex;
  justify-content: center;
}
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
    text-align: left;
    position: relative;

  h3{
    text-align: center;
  }
}
</style>

