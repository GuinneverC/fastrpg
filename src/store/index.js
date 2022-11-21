import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexlocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'fastrpg-vue-django'
})

export default new Vuex.Store({
    plugins: [vuexlocal.plugin]
})