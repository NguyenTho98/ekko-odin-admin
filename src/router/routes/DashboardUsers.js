import { lazy } from 'react'
const DashboardUsers = [
  // Dashboards
  {
    path: '/student',
    component: lazy(() => import('../../pages/student/Student'))
  },
]

export default DashboardUsers
