'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import AdminDashboard from './Dashboard/page'
import Login from '../components/Login'
import SignIn from '../auth/signin/page'

type Props = {}

const Admin = (props: Props) => {
  const {data: session} = useSession()
  
  return (
    <div className='usercontainer'>
      {session && <AdminDashboard />}
      {!session && <SignIn />}
    </div>
  )
}

export default Admin