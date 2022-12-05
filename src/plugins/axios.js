import axios from 'axios'
import store from '../store'
 
axios.defaults.baseURL = "http://fastrpg.pythonanywhere.com/"

axios.interceptors.request.use( config => {
    console.log(store.state.auth.user)
    if (store.state.auth.user.access) {
        const token = store.state.auth.user.access
        config.headers["Authorization"] = `Bearer ${token}`
    } 
    return config
})