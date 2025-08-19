import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/authSlice.js'
import authService from '../../appwrite/auth.js'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
    >
        Logout
    </button>
  )
}

export default LogoutBtn