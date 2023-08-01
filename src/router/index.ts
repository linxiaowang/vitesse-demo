import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [{
    path: '/',
    component: () => import('~/pages/index.vue'),
    name: 'home',
    children: [
      {
        path: 'following',
        component: () => import('~/pages/index.vue'),
        name: 'follow',
      },
    ],
  }],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach(async (to, from) => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
