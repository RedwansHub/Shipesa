import { Box, Grid, Paper } from '@mui/material'
import DataRibbon from '../components/Dashboard/DataRibbon'
import TransactionsPerDay from '../components/Dashboard/TransactionsPerDay'
import TransactionBottomRow from '../components/Dashboard/TransactionBottomRow'

export default function Dashboard () {
    return (
        <div className='' >
            <Box>
                <Grid container gap={4} marginTop={2}>
                    <DataRibbon />
                    <TransactionsPerDay />
                </Grid>
                {/* <TransactionBottomRow /> */}
            </Box>
        </div>
    )
}