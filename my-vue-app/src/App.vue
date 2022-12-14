<script>
// PASSAGGIO 0 IMPORT DI AXIOS E STORE IN APP VUE (E DEI COMPONENTI NECESSARI)
import axios from 'axios';
import {store} from './store.js'
import HeaderCom from './components/HeaderCom.vue';
import MainCom from './components/MainCom.vue';

export default {
  components: {HeaderCom, MainCom},
  data() {
    return {
      store
    }
  },
  // PASSAGGIO 1 CHIAMATA API. DENTRO CI SONO LE PARAMS 
  created() {
  axios.get('https://api.themoviedb.org/3/search/movie?',
  {params: {
    api_key: 'eb1ed900c48680a9ff96c2b827993131',
    query: 'eroe',
    // language: 'it-IT',
    }
  })
  // PASSAGGIO 2: ASSEGNO ALLO STORE IL VALORE DELL'ARRAY DI RISULTATI(resp.data.results)
    .then(resp => {
      store.movies = resp.data.results
      console.log(store.movies)
    })
  }
}
</script>

<template>
  <HeaderCom></HeaderCom>
  <MainCom></MainCom>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
