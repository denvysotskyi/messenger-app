import ChatPage from '../pages/ChatPage'
import LoginPage from '../pages/LoginPage'

export const privateRoutes = [{
  path: '/chat',
  component: ChatPage,
  exact: true
}]

export const publicRoutes = [{
  path: '/login',
  component: LoginPage,
  exact: true
}]