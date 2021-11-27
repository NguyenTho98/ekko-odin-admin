import { lazy } from 'react'
const DashboardUsers = [
  // Dashboards
  {
    path: '/student',
    component: lazy(() => import('../../pages/student/Student'))
  },
  {
    path: '/bussinessemployee',
    component: lazy(() => import('../../pages/bussinessemployee/Bussinessemployee'))
  },
  {
    path: '/receptionist',
    component: lazy(() => import('../../pages/receptionist/Receptionist'))
  },
  {
    path: '/studentcare',
    component: lazy(() => import('../../pages/studentcare/Studentcare'))
  },
  {
    path: '/teachers',
    component: lazy(() => import('../../pages/teachers/Teachers'))
  },
  {
    path: '/managers',
    component: lazy(() => import('../../pages/managers/Managers'))
  },
]

export default DashboardUsers
