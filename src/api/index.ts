import { request } from '~/api/request'

export function getArticleRankList(params: any) {
  return request.post('/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7226238481911006754&spider=0', params)
}
