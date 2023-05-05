<template>
  <div class="about">
    <h1>This is the about T1 page</h1>
  </div>
</template>

<script>

import { onMounted, onUnmounted } from "vue";
import { socketService } from "../services/SocketService.js";

export default {

  setup() {

    onMounted(() => {
      socketService.emit('t1:join')
    })

    onUnmounted(() => {
      socketService.emit('t1:left')
    })

    return {

    }
  }
}
</script>
