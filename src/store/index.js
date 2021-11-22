import {createStore} from 'vuex'

const store = createStore({
    state: {
        currentVal: 0
    },
    mutations: {
        increment: state => state.currentVal++,
        decrement: state => state.currentVal--
    }
})
  
export default store