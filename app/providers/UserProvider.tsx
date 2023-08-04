'use client'

import React from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import SideMenu from '../components/SideMenu/SideMenu'
import { SafeUser } from '../lib/Types'


type Props = {
    children: React.ReactNode,
    user: SafeUser | null
}

const UserProvider = ({children, user}: Props) => {
    const { data: session } = useSession();
    
  return (
   
      <div className= { !session ? 'layout' : 'userlayout'}>
          {session && <SideMenu User={user} /> }
          {children}
      </div>
   
  )
}

export default UserProvider