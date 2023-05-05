<template>
  <div class="auth">
    <div class="bg-dark d-flex gap-3 border-top border-success p-1">
      <router-link class="text-light ms-2 selectable" :to="{name: 'About'}">T1</router-link>
      <router-link class="text-light selectable" :to="{name: 'Account'}">T2</router-link>
      <router-link class="text-light selectable" :to="{name: 'Auth.Lab'}">Lab</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
