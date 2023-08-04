'use client'

import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    colorMode: string
}

const UsersTable = (props: Props) => {
  return (
    <>
        <Typography>Users</Typography>
        <Box sx={{ height: 600, width: '100%', borderRadius: '20px', bgcolor: props.colorMode == 'light' ? '#D0D0D0' : '#272727' }}>
        </Box>
    </>
  )
}

export default UsersTable