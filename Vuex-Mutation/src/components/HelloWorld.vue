<template>
    <p>Hello World {{ count }}.</p><button @click="increaseCount">HelloWorld按钮-增加10</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'HelloWorld',
    setup() {
        const store = useStore()
        const count = computed(() => store.state.count)
        const increaseCount = () => {
            store.commit({
                type: 'increment',
                count: 10
            })
        }
        return {
            count,
            increaseCount
        }
    }
}
</script>

