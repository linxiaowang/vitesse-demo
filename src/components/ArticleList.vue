<script setup lang="ts">
interface article {
  article_id: string
  article_info: any
  author_user_info: any
  category: any
  tags: any

}

withDefaults(defineProps<{
  articleList: article[]
}>(), {
  articleList: () => [],
})

function load() {
  console.log('load')
}
</script>

<template>
  <ul v-infinite-scroll="load" w-180 bg-white overflow="auto" cursor="pointer">
    <li v-for="article in articleList" :key="article.article_id" p="~ pt-3 py-5">
      <div />
    </li>
  </ul>
</template>

<style scoped>

</style>
