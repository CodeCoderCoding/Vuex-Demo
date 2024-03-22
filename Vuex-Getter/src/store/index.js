import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 1
    },
    getters: {
        tenTimes: (state) => {
            return state.count * 2
        }
    }
})

export default store