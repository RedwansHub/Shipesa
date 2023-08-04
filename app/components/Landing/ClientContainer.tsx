import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const ClientContainer = () => {
  return (
    <Grid container gap={4}>
      <Paper sx={{padding: 1, borderRadius: '5px', width: 180, display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
        <Image src={'/Evc.png'} alt='Evc' width={50} height={50}/>
        <Typography className='text-green-600 font-bold'>EVC <span className='text-blue-500'>Plus</span></Typography>
      </Paper>
      <Paper sx={{padding: 1, borderRadius: '5px', width: 180, display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
          <Image src={'/Mpesa.png'} alt={'m-pesa'} width={50} height={50}/>
          <Typography className='text-green-600 font-bold'>M-Pesa</Typography>
      </Paper>
      <Paper sx={{padding: 1, borderRadius: '5px', width: 180, display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
        <Image src={'/Trust.png'} alt='TrustWallet' width={50} height={50}/>
        <Typography className=' font-bold'>Trust Wallet</Typography>
      </Paper>
      <Paper sx={{padding: 1, borderRadius: '5px', width: 180, display: 'flex' , justifyContent:'center', alignItems: 'center'}}>
          <Image src={'/Meta.png'} alt={'Meta'} width={50} height={50}/>
          <Typography className=' font-bold'>Metamask</Typography>
      </Paper>

    </Grid>
  )
}

export default ClientContainer