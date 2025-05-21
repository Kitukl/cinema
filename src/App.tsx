import {createBrowserRouter, Outlet, RouterProvider} from 'react-router'
import './App.css'
import {Sidebar} from './components/Sidebar/Sidebar.tsx'
import {ListPage} from './pages/ListPage/ListPage.tsx'
import {Main} from './pages/Main/Main.tsx'
import {Register} from './pages/Register/Register.tsx'
import {FilmPage} from './pages/FilmPage/FilmPage.tsx'

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
        path: '/list/:id',
        element: <ListPage />,
      },
      {
        path: '/films/:id',
        element: <FilmPage />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
