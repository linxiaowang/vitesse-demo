<script setup lang="ts">
interface Menu {
  path: string
  name: string
}

withDefaults(
  defineProps<{
    menuList: Menu[]
  }>(),
  {
    menuList: () => [],
  },
)
</script>

<template>
  <ul mr-5 w-45 bg-white p-2 shadow-sm>
    <li v-for="menu in menuList" :key="menu.path" p="~ x-4 y-2" w-full>
      {{ menu.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>
