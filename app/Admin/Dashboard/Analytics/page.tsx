'use client'

import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { TableData } from "@/app/lib/utils/DemoData";  
import { useState } from "react";
import Transactions from "@/app/components/Tables/Transactions";
import UsersTable from "@/app/components/Tables/Users";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingY: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

export default function Analytics() {
    const [value, setValue] = useState(0);
    const theme = useTheme()
    const currentMode = theme.palette.mode;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <h2 className="font-bold text-2xl py-4">Analytics</h2>
            <Box sx={{  }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Transactions" value={0}/>
                    <Tab label="Users"  value={1}/>
                    <Tab label="Extra"  value={2}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Transactions colorMode={currentMode}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <UsersTable colorMode={currentMode}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </>
    )
}