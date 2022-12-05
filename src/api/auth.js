import axios from 'axios'

export default class AuthApi {
    async login(user) {
        const { data } = await axios.post('/token/', user)
        return data
    }
}