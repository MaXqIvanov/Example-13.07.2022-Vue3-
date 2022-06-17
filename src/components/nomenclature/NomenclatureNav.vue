<template>
  <div class="nomenclature_nav bg-dark">
    <div class="nomenclature_nav_wrapper">
        <div class="nomenclature_nav_title">Номенклатуры</div>
        <div class="d-flex nomenclature_nav_choice">
            <!-- <div class="nomenclature_all"><span>все</span></div> -->
            <div class="nomenclature_my"><span>ждут подтверждение</span></div>
            <form class="d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск...">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Поиск</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'NomenclatureNav',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.nomenclature_nav_choice{
    cursor: pointer;
    font-size: medium;

}
.nomenclature_my{
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.nomenclature_all{
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    margin-right: 20px;
    &:hover{
        color: rgba($color: aqua, $alpha: 0.8);
    }
}
.nomenclature_nav_title{

}
.nomenclature_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.nomenclature_nav_wrapper{
    height: 50px;
    width: 97%;
    color: white;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;
    font-size: x-large;
}
</style>