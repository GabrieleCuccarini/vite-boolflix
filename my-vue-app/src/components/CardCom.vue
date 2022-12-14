<script>
import {store} from '../store.js'
export default {
    props: {
        test: {
            type: Object,
            required: true
        }
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
    <img :src="test.src" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ test.titolo }}</h5>
      <p class="card-text">
      <ul>
        <li >Cottura: {{ test.cottura }}min</li>
      </ul>
      </p>
    </div>
  </div>
</template>



<style scoped lang="scss">

</style>
