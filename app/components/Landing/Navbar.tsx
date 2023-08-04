'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import ThemeToggleButton from '../ThemeButton'
import { ColorModeContext } from '@/app/providers/ThemesProvider'
import { Button, Paper, Typography } from '@mui/material'
import ToggleButton from '../ToggleButton'
import { signIn } from 'next-auth/react'

type Props = {}

const Navbar = (props: Props) => {
  const colorMode = ColorModeContext

  const router = useRouter()
  return (
    <div className='py-4'>
      <Paper sx={{borderRadius: '10px', paddingY:'4px', paddingX:'16px', display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div onClick={() => router.push('/')} className="w-[160px] cursor-pointer">
              <Image src={'/Logo.png'} alt="Shipesa Logo" height={200} width={200}/> 
          </div>
          <div className='flex gap-4 items-center'>
            {/* <ThemeToggleButton ColorModeContext={colorMode}  /> */}
            <ToggleButton />
            {/* <h2 className='font-semibold border-2 rounded-md px-8 py-2 cursor-pointer hover:bg-blue-500 hover:border-blue-500 hover:text-black duration-200 ease-in-out'>Login</h2> */}
            <Button variant='outlined' onClick={() => signIn()}>Login</Button>
          </div>
      </Paper>
    </div>
  )
}

export default Navbar