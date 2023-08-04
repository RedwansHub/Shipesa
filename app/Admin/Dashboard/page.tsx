'use client'

import SignIn from '@/app/auth/signin/page'
import DataRibbon from '@/app/components/Dashboard/DataRibbon'
import TransactionsPerDay from '@/app/components/Dashboard/TransactionsPerDay'
import { Box, Grid } from '@mui/material'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

const AdminDashboard = (props: Props) => {
  const {data: session} = useSession()
  return (
    <div>
      {!session && <SignIn />}
      {session && (
          <Box>
              <Grid container gap={4} marginTop={2}>
                  <DataRibbon />
                  <TransactionsPerDay />
              </Grid>
              {/* <TransactionBottomRow /> */}
          </Box>
      )}
    </div>
  )
}

export default AdminDashboard