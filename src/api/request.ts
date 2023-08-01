import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 1000 * 60 * 2,
  withCredentials: true,
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 这个状态码是和后端约定的
    return response.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export const request = {
  get: (url: string, data: any, config: any = {}) =>
    service.get(
      url, { params: data || {}, ...config },
    ),
  post: (url: string, data: any, config: any = {}) =>
    service.post(url, data || {}, { ...config }),
}
