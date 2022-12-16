<script>
import {store} from '../store.js'
export default {
  props: {
        singlemovie: Object,
        // singletv: Object
    },
  data() {
    return {
       store,
    }
  },
  methods: {
    // Metodo per piazzare le bandiere: ciclo di if->else if dove 
    // alla stringa language viene fatta corrispondere un'icona
    placeFlag() {
      if (this.singlemovie.original_language === "en") { 
        return "flag-icon flag-icon-gb"
      } else if (this.singlemovie.original_language === "it") { 
        return "flag-icon flag-icon-it"
      } else if (this.singlemovie.original_language === "es") { 
        return "flag-icon flag-icon-es"
      } else if (this.singlemovie.original_language === "fr") { 
        return "flag-icon flag-icon-fr"
      } else if (this.singlemovie.original_language === "ja") { 
        return "flag-icon flag-icon-jp"
      } else if (this.singlemovie.original_language === "de") { 
        return "flag-icon flag-icon-de"
      } else if (this.singlemovie.original_language === "ru") { 
        return "flag-icon flag-icon-ru"
      } else if (this.singlemovie.original_language === "hi") { 
        return "flag-icon flag-icon-in"
        // PORTOGHESE DA VERIFICARE
      } else if (this.singlemovie.original_language === "pt") { 
        return "flag-icon flag-icon-pt"
      } else if (this.singlemovie.original_language === "el") { 
        return "flag-icon flag-icon-gr"
      }
    }
  }, computed: {
      setStars(){
      return Math.floor(this.singlemovie.vote_average / 2)
    }
  }
}
</script>



<template>
  <!-- non usare 2 componenti, ne serve 1 con v-if/else. 
  SOLO CARDCOM, NO ALTRO COMPONENTE PER SERIES -->
  <div class="card">
      <img class="card-img-top" :src=" 'https://image.tmdb.org/t/p/w342' + singlemovie.poster_path" alt="Card image cap">
      <div class="card-body overflow-auto">
          <div class="card-title"><b>Title</b>: {{singlemovie.title}}</div>
            <div class="card-text"><b>Original Title</b>: {{singlemovie.original_title}}</div>
            <!-- {{singlemovie.original_language}} è l'elemento corrispondente alla lingua -->
            <div class="card-text flags"><b>Language</b>: 
              <span v-if='placeFlag()' :class='placeFlag()'></span>
              <span v-else class="flag-icon flag-icon-xx"></span>
            </div>
            <div class="card-text d-flex align-items-center">
              <b>Rating</b>: {{setStars}}
               <img src="../star.png" alt="">
            </div>   
            <div class="card-text"><b>Overview</b>: {{singlemovie.overview}}</div>         
      </div>
  </div>
</template>



<style scoped lang="scss">

.card {
  position: relative;
  padding: 0;
  margin: 8px 6px;
  .card-img-top {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: 3;
    &:hover {
      z-index: 1;
    }
  }
  .card-body {
    z-index: 2;
    background-color: aliceblue;
}
    .card-text {
      margin-top: 6px;
      img {
        width: 20px;
      }
  }
}
</style>
