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
]

export default DashboardCenterRoutes
