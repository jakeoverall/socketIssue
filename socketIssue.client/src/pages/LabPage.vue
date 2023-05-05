<template>
  <div class="account">
    <h1>THIS the LAB</h1>
  </div>
</template>

<script>

import { onMounted, onUnmounted } from "vue";
import { LabHandler } from "../handlers/LabHandler.js";

export default {

  setup() {

    onMounted(() => {
      LabHandler.join()
    })

    onUnmounted(() => {
      LabHandler.leave()
    })

    return {

    }
  }
}
</script>
