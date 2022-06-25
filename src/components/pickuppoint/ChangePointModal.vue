<template>
  <div class="block_changePoint">
    <div class="block_changePoint_wrapper">
      <h3>Редактироать точку выдачи</h3>
      <div id="createPoint_map"></div>
      <div @click="changeChangeModal" class="delete_btn"></div>
      <div>
        <div v-if="point_one" class="choose_address_on_map d-flex">ваш текущий адрес : {{point_one.address}}</div>
      </div>
      <div class="mb-3 description_point">
        <label for="inputDescriptionPoint" class="form-label mt-2">описание точки выдачи : </label>
        <textarea required v-model="pointDescription" placeholder="" class="form-control" id="inputDescriptionPoint" rows="5"></textarea>
      </div>
      <div class="errors_message" v-if="v$?.$errors[0]?.$validator === 'minLength'
        && v$.$errors[0]?.$property === 'pointDescription'">минимальная длина поля 5 символов</div>
      <input @click="validateInputs" type="button" class="btn btn-primary mt-2" value="сохранить изменения"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default defineComponent({
  name: 'ChangePointModal',
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
      changeChangeModal: 'pickuppoints/changeChangeModal',
      loadMapChangeModal: 'pickuppoints/loadMapChangeModal',
    }),
    ...mapActions({
      changePoint: 'pickuppoints/changePoint',
    }),
    validateInputs() {
      this.v$.$validate()
      if(this.v$.$error) {
      } else {
        this.changePoint({description: this.pointDescription})
      }
    },
    setData() {
      this.pointDescription = this.point_one.description
    },
  },
  computed: mapState({
      point_one: (state:any)=> state.pickuppoints.point_one,
  }),
   watch: {
    point_one (){
      this.setData()
      this.loadMapChangeModal()
    },
   },
  mounted() {
    this.loadMapChangeModal()
    this.setData()
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
.block_changePoint{
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
    overflow: scroll;
    z-index: 999;
}
.block_changePoint_wrapper{
    height: 96%;
    width: 96%;
    text-align: center;
    position: relative;
    max-height: 90vh;
}
*::-webkit-scrollbar {
    width: 6px; /* ширина scrollbar */
}
*::-webkit-scrollbar-track {
    background: rgb(255, 255, 255); /* цвет дорожки */
    border-radius: 25px;
}
*::-webkit-scrollbar-thumb {
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
