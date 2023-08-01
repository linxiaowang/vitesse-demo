<script setup lang="ts">
import { getArticleRankList } from '~/api'

defineOptions({
  name: 'IndexPage',
})

onMounted(async () => {
  const res = await getArticleRankList({
    client_type: 2608,
    cursor: '0',
    id_type: 2,
    limit: 20,
    sort_type: 200,
  })
  console.log(res)
})

const menuList = [
  {
    name: '关注',
    path: 'following',
  },
  {
    name: '综合',
    path: 'following',
  },
  {
    name: '后端',
    path: 'following',
  },
  {
    name: '前端',
    path: 'following',
  },
]

const articleList = [] as any
</script>

<template>
  <div flex="~ items-start justify-center" m-t>
    <SideMenu :menu-list="menuList" />
    <ArticleList :article-list="articleList" />
  </div>
</template>
