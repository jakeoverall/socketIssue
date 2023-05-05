import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/auth',
    name: 'auth',
    component: loadPage('AuthPage'),
    beforeEnter: authGuard,
    children: [
      {
        path: '/about',
        name: 'About',
        component: loadPage('AboutPage'),
      },
      {
        path: '/lab',
        name: 'Auth.Lab',
        component: loadPage('LabPage'),
      },
      {
        path: '/account',
        name: 'Account',
        component: loadPage('AccountPage'),
      }
    ]
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
