<script setup lang="ts">
// interface Menu {
//   name: string,
//   path: string
// }
defineOptions({
  name: 'HeaderMenu',
})

const menuList = ref([
  {
    name: '首页',
    path: '/',
  },
  {
    name: '沸点',
    path: '/pins',
  },
  {
    name: '课程',
    path: '/course',
  },
  {
    name: '直播',
    path: '/live',
  },
  {
    name: '活动',
    path: '/activity',
  },
])
</script>

<template>
  <div flex="~ items-center">
    <RouterLink
      v-for="menu in menuList" :key="menu.path"
      hover="text-blue-500 border-b-2 border-blue-500 border-solid" w-15 text-center line-height-15 :to="menu.path"
    >
      {{ menu.name }}
    </RouterLink>
  </div>
</template>

<style scoped>
</style>
