'use client'

import React from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import SideMenu from '../components/SideMenu/SideMenu'


type Props = {
    children: React.ReactNode
}

const UserProvider = ({children}: Props) => {
    const { data: session } = useSession();
    
  return (
   
      <div className='layout'>
        {session && <SideMenu /> }
          {children}
      </div>
   
  )
}

export default UserProvider