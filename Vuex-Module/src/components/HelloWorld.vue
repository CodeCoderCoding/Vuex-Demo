<template>
  <p>count: {{ count }}</p>
  <p>countA: {{ countA }}</p>
  <p>countB: {{ countB }}</p>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const countA = computed(() => store.state.moduleA.countA)
    const countB = computed(() => store.state.moduleB.countB)
    return {
      count,
      countA,
      countB
    }
  }
}
</script>

