import {reactive} from 'vue'

export const store = reactive ({
    searchText: '',
    movies: [],
    series: []
})

// export default {
//     methods: {
//         startSearch() {
//         store.searchText = this.inputText
//         console.log(this.inputText)
//         }
//     }
// }