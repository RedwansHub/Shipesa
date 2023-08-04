'use client'

import { TableData } from '@/app/lib/utils/DemoData'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

type Props = {
    colorMode: string
}

const Transactions = (props: Props) => {

  return (
    <>
        <Box sx={{ height: 600, width: '100%', borderRadius: '20px', bgcolor: props.colorMode == 'light' ? '#D0D0D0' : '#272727' }}>
            <DataGrid
                rows={TableData.rows}
                columns={TableData.columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 12,
                    },
                },
                }}
                sx={{
                    borderRadius: '20px'
                }}
                pageSizeOptions={[12]}
                checkboxSelection
                disableRowSelectionOnClick
                
            />
        </Box>
    </>
  )
}

export default Transactions