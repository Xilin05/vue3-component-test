import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    //路由初始指向
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/layout',
    redirect: '/layout/form-component',
    component: Layout,
    name: 'Layout',
    meta: {
      title: 'Layout根目录',
      icon: '',
      hidden: true
    },
    children: [
      {
        //路由初始指向
        path: '/layout/form-component',
        name: 'FormComponent',
        component: () => import('@/views/form-component/index.vue'),
        meta: {
          title: '表单组件测试',
          icon: ''
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
