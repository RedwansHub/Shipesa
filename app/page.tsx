'use client'

import { useSession } from 'next-auth/react'

import Dashboard from './Dashboard/page';
import Login from './components/Login';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={'container'}>
       {session && <Dashboard />}
      {!session && <Login />}
    </div>
   )
}
