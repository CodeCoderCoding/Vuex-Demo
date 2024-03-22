import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 1
    },
    mutations: {
        increment(state, n) {
            state.count += n
        }
    },
    actions: {
        increment(context, payload) {
            setTimeout(() => {
                const backCount = Math.random() * 2 + 1;
                console.log(backCount);
                if (backCount < 2) context.commit('increment', backCount + payload.count);
            }, 1000)
        }
    }
})
export default store