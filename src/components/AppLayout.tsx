import React from 'react'
import CustomDrawer from './Drawer'
import { Outlet } from 'react-router-dom'

const AppLayout:React.FC<any> = () => {
  return (
    <>
      <CustomDrawer>
        <Outlet />
      </CustomDrawer>
    </>
  )
}

export default AppLayout