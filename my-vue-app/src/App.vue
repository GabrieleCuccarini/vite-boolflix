<script>
import {store} from './store.js'
import TheHeader from './components/HeaderCom.vue';
import MainCom from './components/MainCom.vue';

export default {
  components: {TheHeader, MainCom},
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <TheHeader></TheHeader>
  <MainCom></MainCom>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
