import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

const RootLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout