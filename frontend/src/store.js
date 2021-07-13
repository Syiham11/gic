import Vue from 'vue'
import Vuex from 'vuex'

//IMPORT MODULE SECTION
import kontak from './store/kontak.js'

Vue.use(Vuex)

//DEFINE ROOT STORE VUEX
const store = new Vuex.Store({
    //SEMUA MODULE YANG DIBUAT AKAN DITEPATKAN DIDALAM BAGIAN INI DAN DIPISAHKAN DENGAN KOMA UNTUK SETIAP MODULE-NYA
    modules: {
        kontak,
    }
})


export default store
