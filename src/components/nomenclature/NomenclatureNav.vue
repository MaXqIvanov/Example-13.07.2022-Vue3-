<template>
  <div class="nomenclature_nav bg-dark">
    <div class="nomenclature_nav_wrapper">
        <div class="nomenclature_nav_title">Номенклатуры</div>
        <div class="d-flex nomenclature_nav_choice">
            <!-- <div class="nomenclature_all"><span>все</span></div> -->
            <div class="nomenclature_my"><span class="not_approved_count_wrapper">ждут подтверждение<div class="not_approved_count">{{notApprovedNomenclatureCount}}</div></span></div>
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
        getNotApprovedNomenclature: 'nomenclature/getNotApprovedNomenclature',
        getNotApprovedNomenclatureCount: 'nomenclature/getNotApprovedNomenclatureCount'
    }),
  },
  computed: mapState({
    notApprovedNomenclatureCount: (state:any)=> state.nomenclature.notApprovedNomenclatureCount,
  }),
  mounted() {
      this.getNotApprovedNomenclatureCount()
  },
});
</script>
<style lang="scss" scoped>
.not_approved_count_wrapper{
    position: relative;
}
.not_approved_count{
    color: red;
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: small;
}
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