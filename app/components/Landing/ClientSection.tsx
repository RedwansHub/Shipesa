import { ClientsInfo } from '@/app/lib/Data'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ClientContainer from './ClientContainer'

type Props = {}

const ClientSection = (props: Props) => {
  return (
    <div className='lg:px-8 md:px-8 px-4 py-2 sm:h-full border-2 rounded-md'>
        <h2>ClientSection</h2>
        <Box>
          <ClientContainer />
        </Box>
    </div>
  )
}

export default ClientSection