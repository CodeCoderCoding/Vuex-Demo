<template>
  <p>Hello World {{ count }}.</p>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    return {
      count
    }
  }
}
</script>

