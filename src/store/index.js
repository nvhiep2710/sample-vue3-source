import { createStore } from 'vuex'
import auth from './auth'
import home from './home'

export default createStore({
  modules: {
    auth,
    home,
  },
})
