import { lazy } from 'react'
const AppOdinRoutes = [
  {
    path: '/contract-create',
    exact: true,
    component: lazy(() => import('../../pages/payment/CreatePayment/CreatePayment'))
  },
  {
    path: '/contract-edit/:id',
    exact: true,
    component: lazy(() => import('../../pages/payment/DetailPayment/DetailPayment')),
    meta: {
      navLink: '/contract-edit'
    }
  },
  {
    path: '/dashboard/overview',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
  {
    path: '/dashboard/classes',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
  {
    path: '/dashboard/students',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
  {
    path: '/dashboard/teachers',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
  {
    path: '/profile',
    component: lazy(() => import('../../pages/profile/Profile')),
    exact: true
  },
  {
    path: '/profile/info',
    component: lazy(() => import('../../pages/profile/Profile')),
  },
  {
    path: '/profile/change-password',
    component: lazy(() => import('../../pages/profile/Profile')),
  },
  {
    path: '/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../pages/emails/Emails')),
  },
]

export default AppOdinRoutes
