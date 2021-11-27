import { User, Circle } from 'react-feather'

export default [
  {
    id: 'dashboardUsers',
    title: 'Quản lý người dùng',
    icon: <User size={20} />,
    badge: 'light-warning',
    children: [
      {
        id: 'studentDashUsers',
        title: 'Học viên',
        icon: <Circle size={12} />,
        navLink: '/student'
      },
      {
        id: 'bussinessemployeeDashUsers',
        title: 'Nhân viên kinh doanh',
        icon: <Circle size={12} />,
        navLink: '/bussinessemployee'
      },
      {
        id: 'receptionistDashUsers',
        title: 'Lê tân',
        icon: <Circle size={12} />,
        navLink: '/receptionist'
      },
      {
        id: 'studentcareDashUsers',
        title: 'Chăm sóc học viên',
        icon: <Circle size={12} />,
        navLink: '/studentcare'
      },
      {
        id: 'teacherDashUsers',
        title: 'Giáo viên',
        icon: <Circle size={12} />,
        navLink: '/teachers'
      },
      {
        id: 'managerDashUsers',
        title: 'Quản lý',
        icon: <Circle size={12} />,
        navLink: '/managers'
      },
    ]
  }
]
