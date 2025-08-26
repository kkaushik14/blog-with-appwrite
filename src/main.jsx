import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup, AddPost, AllPosts, EditPost, Home, Post } from './pages/index.js'
import { AuthLayout, Login } from './components/index.js'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/post/:slug',
      element: <Post />
    },
    {
      path: '/add-post',
      element: (
        <AuthLayout authentication>
          {""}
          <AddPost />
        </AuthLayout>
      )
    },
    {
      path: '/edit-post/:slug',
      element: (
        <AuthLayout authentication>
          {""}
          <EditPost />
        </AuthLayout>
      )
    },
    {
      path: '/all-posts',
      element: (
        <AuthLayout authentication>
          {""}
          <AllPosts />
        </AuthLayout>
      )
    },
    {
      path: '/login',
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: '/signup',
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>
)
