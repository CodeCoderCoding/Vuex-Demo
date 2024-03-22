import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 1
    },
    mutations: {
        increment(state, payload) {
            // 变更状态
            state.count += payload.count
        }
    }
})

export default store
