export const auth = { 
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        aetLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        }
    }
}