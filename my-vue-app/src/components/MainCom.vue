<script>
import {store} from '../store.js'
import CardCom from './CardCom.vue'
export default {
    // PASSGGIO 3 LAVORO SUL MAIN, DENTRO CI METTO 
    // IL COMPONENTE SINGOLO A CUI ASSEGNARE INTERNAMENTE LE PROPS
    components: {CardCom},
        data() {
            return {
                store
        }
    },
}
</script>

<template>
        <div class="container-fluid ">
        <div class="container">
            <div class="row g-2">
            <!--  PASSAGGIO 4 CREO IL CICLO FOR NELL'ARRAY store.movies 
                CREATO PRECEDENTEMENTE. POI ASSEGNO ALLA PROPS IL VALORE 
                DEL SINGOLO ITEM NELL'ARRAY store.movies, ALIAS card -->
                <CardCom :singlemovie="card" class="col-3" v-for="(card, i) in store.movies" :key=" 'movie' + i" />
                <!-- <CardCom :singletv="tvshow" class="col-3" v-for="(tvshow, i) in store.series" :key=" 'serie' + i" /> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    background-color: rgb(67,67,67);
}
.col-3 {
    width: calc(25% - 12px);
    height: 400px;
}
</style>