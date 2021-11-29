import { lazy } from 'react'
const AppOdinRoutes = [
  {
    path: '/payment-create',
    exact: true,
    component: lazy(() => import('../../pages/payment/CreatePayment/CreatePayment'))
  },
  {
    path: '/payment-edit/:id',
    exact: true,
    component: lazy(() => import('../../pages/payment/DetailPayment/DetailPayment')),
    meta: {
      navLink: '/payment-edit'
    }
  },
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../../pages/dashboard/Dashboard'))
  },
]

export default AppOdinRoutes
