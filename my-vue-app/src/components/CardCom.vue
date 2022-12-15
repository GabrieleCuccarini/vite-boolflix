<script>
import {store} from '../store.js'
export default {
  props: {
        singlemovie: Object
    },
  data() {
    return {
       store,
    }
  }
}
</script>



<template>
  <div class="card">
      <img class="card-img-top" :src=" 'https://image.tmdb.org/t/p/w342' + singlemovie.poster_path" alt="Card image cap">
      <div class="card-body">
          <div class="card-title">{{singlemovie.title}}</div>
            <div class="card-text">{{singlemovie.original_title}}</div>
            <div class="card-text">{{singlemovie.original_language}}</div>
            <div class="card-text">{{singlemovie.vote_average}}</div>
      </div>
  </div>
</template>



<style scoped lang="scss">
.card {
  padding: 0;
  margin: 8px 6px;
}
</style>
