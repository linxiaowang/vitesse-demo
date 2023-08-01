import { request } from '~/api/request'

export function getArticleRankList(params: any) {
  return request.get('/content_api/v1/content/article_rank?category_id=1&type=hot', params)
}

export function getGeneralArticleList(params: any) {
  return request.post('/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7052499118774027788&spider=0', params)
}
