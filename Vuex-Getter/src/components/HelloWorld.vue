<template>
  <p>Hello World {{ tenTimes }}.</p>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const tenTimes = computed(() => store.getters.tenTimes)
    return {
      tenTimes
    }
  }
}
</script>

