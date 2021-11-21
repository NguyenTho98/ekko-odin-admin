import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboardCenter',
    title: 'Quản lý trung tâm',
    icon: <Home size={20} />,
    badge: 'light-warning',
    children: [
      {
        id: 'centerDashCenter',
        title: 'Trung tâm',
        icon: <Circle size={12} />,
        navLink: '/center'
      },
      {
        id: 'courseDashCenter',
        title: 'Khóa học',
        icon: <Circle size={12} />,
        navLink: '/course'
      },
      {
        id: 'classRoomDashCenter',
        title: 'Phòng học',
        icon: <Circle size={12} />,
        navLink: '/classRoom'
      },
      {
        id: 'classesDashCenter',
        title: 'Lớp học',
        icon: <Circle size={12} />,
        navLink: '/classes'
      },
      {
        id: 'commentDashCenter',
        title: 'Bình luận',
        icon: <Circle size={12} />,
        navLink: '/comment'
      },
      {
        id: 'rewardDashCenter',
        title: 'Ưu đãi',
        icon: <Circle size={12} />,
        navLink: '/reward'
      },
    ]
  }
]
