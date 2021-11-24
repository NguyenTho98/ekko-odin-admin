import { lazy } from 'react'
const DashboardCenterRoutes = [
  // Dashboards
  {
    path: '/center',
    component: lazy(() => import('../../pages/center/Center'))
  },
  {
    path: '/course',
    component: lazy(() => import('../../pages/course/Course')),
    exact: true
  },
  {
    path: '/classRoom',
    component: lazy(() => import('../../pages/classRoom/ClassRoom')),
    exact: true
  },
  {
    path: '/classes',
    component: lazy(() => import('../../pages/classes/Classes')),
    exact: true
  },
  {
    path: '/classes/edit/:id',
    component: lazy(() => import('../../pages/classes/ClassesDetail')),
    meta: {
      navLink: '/classes/edit'
    }
  },
  {
    path: '/comment',
    component: lazy(() => import('../../pages/comment/Comment')),
    exact: true
  },
  {
    path: '/reward',
    component: lazy(() => import('../../pages/reward/Reward')),
    exact: true
  },
  {
    path: '/profile',
    component: lazy(() => import('../../pages/profile/Profile')),
    exact: true
  },
  {
    path: '/payment',
    component: lazy(() => import('../../pages/payment/Payment')),
    exact: true
  },
  {
    path: '/contract',
    component: lazy(() => import('../../pages/contract/Contract')),
    exact: true
  },
  {
    path: '/payment/print/',
    layout: 'BlankLayout',
    component: lazy(() => import('../../pages/print/PrintPayment'))
  },
  {
    path: '/contract/print/',
    layout: 'BlankLayout',
    component: lazy(() => import('../../pages/print/PrintContract'))
  },
]

export default DashboardCenterRoutes
