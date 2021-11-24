import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboardUsers',
    title: 'Quản lý người dùng',
    icon: <Home size={20} />,
    badge: 'light-warning',
    children: [
      {
        id: 'studentDashUsers',
        title: 'Học viên',
        icon: <Circle size={12} />,
        navLink: '/student'
      },
    ]
  }
]
