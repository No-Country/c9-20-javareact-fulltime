import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

const RootLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout