import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/Home.vue'
import SignIn from '@/pages/auth/SignIn.vue'
import SignUpStep1 from '@/pages/auth/SignUpStep1.vue'
import SignUpStep2 from '@/pages/auth/SignUpStep2.vue'

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    redirect: { name: 'HomePage' },
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: Home,
      },
    ],
  },
  {
    path: '/player',
    name: 'AuthLayout',
    redirect: { name: 'SignIn' },
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
      },
      {
        path: '/sign-up/step-1',
        name: 'SignUpStep1',
        component: SignUpStep1,
      },
      {
        path: '/sign-up/step-2',
        name: 'SignUpStep2',
        component: SignUpStep2,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
