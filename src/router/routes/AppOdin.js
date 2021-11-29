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
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
]

export default AppOdinRoutes
