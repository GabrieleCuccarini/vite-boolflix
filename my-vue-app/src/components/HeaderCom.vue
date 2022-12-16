<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store,
    }
  }
}
</script>


<template>
    <div class="container-fluid d-flex align-items-center justify-content-around">
        <div class="logo-cont">
          <img src="../img/netflix.png" alt="">
        </div>
        <div>
          <input type="text" v-model="store.searchText" id="nomefilm" placeholder="Cerca un film...">
          <button class="btn btn-dark" @click="$emit('performSearch')">Cerca</button>
        </div>
        
    </div>
</template>



<style scoped lang="scss">
.container-fluid {
    width: 100vw;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: black;
    img {
      width: 400px;
    }
    input {
        width: 250px;
        height: 38px;
    }
    .btn {
        margin-left: 10px;
    }
}
</style>
