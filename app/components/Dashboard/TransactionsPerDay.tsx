'use client'

import React from "react";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "../DataChart";
import { lineChartData } from "@/app/lib/utils/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={'wrapper'}>
      <Paper className={'transactions'}>
        <div className={'chart'}>
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={'cardWrapper'}>
          <Card className={'card'} variant={"outlined"}>
            <div className={'cardTitle'}>
              <Typography>Total Products</Typography>
            </div>
            <div className={'cardValue'}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </div>
          </Card>
          <Card className={'card'} variant={"outlined"}>
            <div className={'cardTitle'}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={'cardValue'}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.4%
              </Typography>
            </div>
          </Card>
          <Card className={'card'} variant={"outlined"}>
            <div className={'cardTitle'}>
              <Typography>Refunds</Typography>
            </div>
            <div className={'cardValue'}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;