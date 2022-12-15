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
  },
  methods: {
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
        return "flag-icon flag-icon-gb"
      } else if (this.singlemovie.original_language === "ru") { 
        return "flag-icon flag-icon-ru"
      } else if (this.singlemovie.original_language === "hi") { 
        return "flag-icon flag-icon-in"
        // PORTOGHESE DA VERIFICARE
      } else if (this.singlemovie.original_language === "pr") { 
        return "flag-icon flag-icon-in"
      }
    }
  }
}
</script>



<template>
  <!-- non usare 2 componenti, ne serve 1 con v-if/else. 
  SOLO CARDCOM, NO ALTRO COMPONENTE PER SERIES -->
  <div class="card">
      <img class="card-img-top" :src=" 'https://image.tmdb.org/t/p/w342' + singlemovie.poster_path" alt="Card image cap">
      <div class="card-body">
          <div class="card-title"><b>Title</b>: {{singlemovie.title}}</div>
            <div class="card-text"><b>Original Title</b>: {{singlemovie.original_title}}</div>
            <!-- {{singlemovie.original_language}} è l'elemento corrispondente alla lingua -->
            <div class="card-text"><b>Language</b>: 
              <span v-if='placeFlag()' :class='placeFlag()'></span>
              <span v-else class="flag-icon flag-icon-xx"></span>
            </div>
            <div class="card-text"><b>Rating</b>: {{singlemovie.vote_average}}</div>            
      </div>
  </div>
</template>



<style scoped lang="scss">
.card {
  padding: 0;
  margin: 8px 6px;
}

.card-text {
  margin-top: 6px;
}
.card-body {
  background-color: aliceblue;
}
</style>
