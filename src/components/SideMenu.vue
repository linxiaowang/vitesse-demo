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

const route = useRoute()

function isCurrentMenu(path: string) {
  return route.path === path
}
</script>

<template>
  <ul mr-5 w-45 bg-white p-2 shadow-sm>
    <li
      v-for="menu in menuList" :key="menu.path" p="~ x-4 y-2" hover="bg-[#f7f8fa] text-[#1e80ff]" cursor="pointer"
      w-full :class="{ active: isCurrentMenu(menu.path) }"
    >
      <RouterLink inline-block h-full w-full :to="menu.path">
        {{ menu.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.active {
  @apply bg-[#eaf2ff] text-[#1e80ff]
}
</style>
