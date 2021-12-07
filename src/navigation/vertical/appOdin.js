import { Home, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Mail } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Trang chủ',
    icon: <Home size={20} />,
    navLink: '/dashboard/classes'
  },
  {
    id: 'contract-create',
    title: 'Tạo hợp đồng',
    icon: <FileText size={20} />,
    navLink: '/contract-create'
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
    navLink: '/email'
  },
]
