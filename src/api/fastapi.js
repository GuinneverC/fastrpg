import axios from 'axios'

export default class FastRPGApi {
    async getAllClasses() {
        const { data } = await axios.get('/api/class')
        return data
    }
    async getAllRaces() {
        const { data } = await axios.get('/api/race')
        return data
    }
}