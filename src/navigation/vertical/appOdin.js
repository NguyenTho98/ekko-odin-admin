import { Home, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Trang chủ',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'payment-create',
    title: 'Tạo hợp đồng',
    icon: <FileText size={20} />,
    navLink: '/payment-create'
  },
]
