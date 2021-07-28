import Axios from 'axios'

const baseApiUrl = 'http://localhost:3000/'
const api = Axios.create({ baseURL: baseApiUrl })

export default api
