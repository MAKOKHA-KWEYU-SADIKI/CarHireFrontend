import Sidenav from './userSidebar'
import Card from './userContainer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
const Userdashbord = () => {
  return (
    <div>
        
        <div className='min-w-fit bg-green-200 hidden md:block'>
          <Sidenav />
        </div>
        <div className='flex flex-col min-w-[90%] '>
          <Card className='h-fit'>
            <Outlet />
          </Card>
        </div>
     
      <Footer />
    </div>
  )
}

export default Userdashbord