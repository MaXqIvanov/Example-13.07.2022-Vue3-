<template>
  <div class="block_createPoint">
    <div class="block_createPoint_wrapper">
      <h3>Добавить точку выдачи</h3>
      <div id="createPoint_map"></div>
      <div @click="changeCreateModal" class="delete_btn"></div>
      <div>
        <div v-if="address.address" class="choose_address_on_map d-flex">ваш адрес : {{address.address}}</div>
      </div>
      <div class="mb-3 description_point">
        <label for="inputDescriptionPoint" class="form-label mt-2">описание точки выдачи : </label>
        <textarea required v-model="pointDescription" placeholder="режим работы : пн 10:00-18:00, вт 10:00-18:00, ср 10:00-18:00, чт 10:00-18:00" class="form-control" id="inputDescriptionPoint" rows="3"></textarea>
      </div>
      <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'pointDescription'">минимальная длина поля 5 символов</div>
      <input :disabled="!address.address" @click="validateInputs" type="button" class="btn btn-primary mt-2" value="добавить точку"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default defineComponent({
  name: 'CreatepointModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
      pointDescription: '' as string,
    };
  },
  validations() {
  		return {
        pointDescription: { minLength: minLength(5) },
  		}
  	},
  methods: {  
    ...mapMutations({
      changeCreateModal: 'pickuppoints/changeCreateModal',
      loadMapCreateModal: 'pickuppoints/loadMapCreateModal',
    }),
    ...mapActions({
      createPoint: 'pickuppoints/createPoint',
    }),
    validateInputs() {
      console.log("this is works");
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.createPoint({description: this.pointDescription})
      }
    }
  },
  computed: mapState({
    address: (state:any)=> state.pickuppoints.address,
  }),
  mounted() {
    this.loadMapCreateModal()
  }
});
</script>
<style lang="scss" scoped>
.description_point{
  text-align: start;
}
.choose_address_on_map{
  text-align: left;
  font-size: small;
}
#createPoint_map{
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
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
.block_createPoint{
    position: fixed;
    top: 50%;
    left: 50%;
    height: fit-content;
    padding: 10px;
    border-radius: 5px;
    width: 720px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px gray;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    z-index: 999;
}
.block_createPoint_wrapper{
    height: 96%;
    width: 96%;
    text-align: center;
    position: relative;
    max-height: 90vh;
}
.block_createPoint::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
}
.block_createPoint::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
}
.block_createPoint::-webkit-scrollbar-thumb {
    background-color: #b8e5ff; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid #b8e5ff; /* padding вокруг плашки */
}
</style>
<style lang="scss">
.mapboxgl-ctrl-group{
  width: 30px !important;
  max-width: 30px !important;
}
.mapboxgl-ctrl-top-right {
    text-align: left;
    width: 100% !important;
    top: 0;
    right: 0;
}
.mapboxgl-ctrl{
  width: 100% !important;
}
.mapboxgl-ctrl-geocoder{
  width: 100% !important;
  min-width: 96% !important;
}
</style>
