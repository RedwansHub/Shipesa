import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='lg:px-8 md:px-8 px-4 py-1 lg:h-[600px] sm:h-full border-2 rounded-md '>
        <Box>
            <Grid container gap={1} className={'topCardsContainer'} >
                <Grid className='lg:py-36 md:py-28 py-2  pt-24 '>
                    <Typography fontSize={20} fontWeight={600} className='lg:text-left  md:text-left text-center'>Empowering Your Financial Future with Crypto.</Typography>
                    <Typography fontSize={48} fontWeight={700} className='lg:text-left  md:text-left text-center'>Embrace the Power of Digital Currency</Typography>
                    <Typography fontSize={18} fontWeight={400} className='lg:text-left  md:text-left text-center'>Experience seamless crypto transactions and swaps with our secure and user-friendly app, 
                        empowering you to navigate the world of digital currencies effortlessly.</Typography>
                    <div className='py-4 flex justify-center lg:justify-start md:justify-start'>
                        <button className='rounded-md py-3 px-8 bg-blue-500'>Get Started</button>
                    </div>
                </Grid>
                <Grid>
                <Image src={'/ship.svg'} alt='image' width={600} height={600}/>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Hero