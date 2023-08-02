'use client'

import Grid from "@mui/material/Grid";
import React from "react";
import Paper from "@mui/material/Paper";
import scss from "./TransactionsBottomRow.module.scss";
import DataChart from "../DataChart";
import { doughnutChartData } from "@/app/lib/utils/mockData";

const TransactionBottomRow = () => {
  return (
    <Grid container className={'bottomRow'}>
      <Grid>
        <Paper className={'dataCard'}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={'dataCard'}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={'dataCard'}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={'dataCard'}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;