<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

const searchText = ref('')
</script>

<template>
  <div sticky top-0 h="15" flex="~ items-center justify-center" bg-white shadow-sm>
    <div flex="~ items-center justify-between" min-w-7xl>
      <div flex="~ items-center">
        <img mr-3 w-25 src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
        <HeaderMenu />
      </div>
      <div flex="~ items-center">
        <el-input
          v-model="searchText"
          placeholder=""
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
