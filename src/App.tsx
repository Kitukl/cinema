import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { History } from './pages/History/History.tsx'
import { Main } from './pages/Main/Main.tsx'

const Layout = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
