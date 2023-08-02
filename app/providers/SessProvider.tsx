'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'


type Props = {
    children: React.ReactNode
}

const SesProvider = ({children}: Props) => {
  return (
   
      <SessionProvider>
          {children}
      </SessionProvider>
   
  )
}

export default SesProvider