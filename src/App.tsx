import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
