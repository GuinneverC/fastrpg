import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {auth} from './auth'

Vue.use(Vuex)

const vuexlocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'fastrpg-vue-django'
})

const modules = {
    auth
}

export default new Vuex.Store({
    modules,
    plugins: [vuexlocal.plugin]
})