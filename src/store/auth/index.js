import AuthApi from '@/api/auth'
const authApi = new AuthApi()

export const auth = { 
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        setLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        },
        setLogout(state) {
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login({commit}, user) {
            try {
                const userInfo = await authApi.login(user) 
                commit('setLoginInfo', userInfo)
            } catch(e) {
                commit('setLogout')
                return Promise.reject()
            }
        },
        logout({commit}) {
            commit('setLogout')
        },
    }
}