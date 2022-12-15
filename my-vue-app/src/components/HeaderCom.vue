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
    <div class="container-fluid d-flex align-items-center justify-content-center">
        <input type="text" v-model="store.searchText" id="nomefilm" placeholder="Cerca un film...">
        <button class="btn btn-dark" @click="$emit('performSearch')">Cerca</button>
    </div>
</template>



<style scoped lang="scss">
.container-fluid {
    margin-bottom: 1rem;
    input {
        width: 250px;
        height: 38px;
    }
    .btn {
        margin-left: 10px;
    }
}
</style>
