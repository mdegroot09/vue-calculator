import {createStore} from 'vuex'

const store = createStore({
    state: {
        screenText: 0
    },
    mutations: {
        increment: state => state.screenText++,
        decrement: state => state.screenText--
    }
})
  
export default store