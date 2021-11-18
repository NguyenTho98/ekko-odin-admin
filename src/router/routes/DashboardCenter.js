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
]

export default DashboardCenterRoutes
