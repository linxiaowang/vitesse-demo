<script setup lang="ts">
import { getGeneralArticleList } from '~/api'

defineOptions({
  name: 'IndexPage',
})

const menuList = [
  {
    name: '关注',
    path: '/following',
  },
  {
    name: '综合',
    path: '/',
  },
  {
    name: '前端',
    path: '/frontend',
  },
  {
    name: '后端',
    path: '/backend',
  },
]
const articleList = ref([])

onMounted(async () => {
  // await getHotArticleList()
  await getComprehensiveArticleList()
})

// async function getHotArticleList() {
//   const res = await getArticleRankList({})
//   articleList.value = res.data
// }

async function getComprehensiveArticleList() {
  const res = await getGeneralArticleList({
    id_type: 2,
    client_type: 2608,
    sort_type: 200,
    limit: 10,
  })
  articleList.value = res.data
}
</script>

<template>
  <div flex="~ items-start justify-center" m-t>
    <SideMenu :menu-list="menuList" />
    <ArticleList :article-list="articleList" />
  </div>
</template>
