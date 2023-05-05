<template>
  <div class="account">
    <h1>THIS IS T2</h1>
  </div>
</template>

<script>

import { onMounted, onUnmounted } from "vue";
import { socketService } from "../services/SocketService.js";

export default {

  setup() {

    onMounted(() => {
      socketService.emit('t2:join')
    })

    onUnmounted(() => {
      socketService.emit('t2:left')
    })

    return {

    }
  }
}
</script>
