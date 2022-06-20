<template>
  <div class="block_createPoint">
    <div class="block_createPoint_wrapper">
      <h3>Добавить точку выдачи</h3>
      <div id="createPoint_map"></div>
      <div @click="changeCreateModal" class="delete_btn"></div>
      <div>
        <div v-if="address.address" class="choose_address_on_map d-flex">ваш адрес : {{address.address}}</div>
      </div>
      <input :disabled="!address.address" @click="createPoint" class="btn btn-primary mt-2" value="добавить точку"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import useValidate from "@vuelidate/core";

export default defineComponent({
  name: 'CreatepointModal',
  components: {
  },
  data() {
    return {
      v$: useValidate(),
      errors: '',
    };
  },
  validations() {
  		return {
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
    border-radius: 10px;
    width: 720px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px gray;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block_createPoint_wrapper{
    height: 96%;
    width: 96%;
    text-align: center;
    position: relative;

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
