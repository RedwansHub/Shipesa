import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      headerClassName: 'MuiDataGrid-colCellTitle', 
      width: 90 
    },
    {
      field: 'date',
      headerName: 'Date',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      width: 120,
      type: "date",
      editable: true,
    },
    {
      field: 'sender',
      headerName: 'Sender ID',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      width: 150,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 170,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'location',
      headerName: 'Location',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      width: 110,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      width: 80,
      type: "number",
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      headerClassName: 'MuiDataGrid-colCellTitle ', 
      width: 110,
      editable: true,
    },
  ];
  
  const rows = [
    { status: 'Success', id: 1, date: new Date("2023-07-01"), sender: 'User 02', location: 'Istanbul', lastName: 'Snow', firstName: 'Jon', amount: 35 },
    { status: 'Pending', id: 2, date: new Date("2023-07-01"), sender: 'User 03', location: 'Istanbul', lastName: 'Lannister', firstName: 'Cersei', amount: 42 },
    { status: 'Success', id: 3, date: new Date("2023-07-01"), sender: 'User 04', location: 'Istanbul', lastName: 'Lannister', firstName: 'Jaime', amount: 45 },
    { status: 'Success', id: 4, date: new Date("2023-07-01"), sender: 'User 05', location: 'Istanbul', lastName: 'Stark', firstName: 'Arya', amount: 16 },
    { status: 'Failed', id: 5, date: new Date("2023-07-01"), sender: 'User 06', location: 'Istanbul', lastName: 'Targaryen', firstName: 'Daenerys', amount: 30 },
    { status: 'Pending', id: 6, date: new Date("2023-07-01"), sender: 'User 07', location: 'Istanbul', lastName: 'Melisandre', firstName: 'Dean', amount: 50 },
    { status: 'Failed', id: 7, date: new Date("2023-07-01"), sender: 'User 08', location: 'Istanbul', lastName: 'Clifford', firstName: 'Ferrara', amount: 44 },
    { status: 'Success', id: 8, date: new Date("2023-07-01"), sender: 'User 09', location: 'Istanbul', lastName: 'Frank', firstName: 'John', amount: 36 },
    { status: 'Success', id: 9, date: new Date("2023-07-01"), sender: 'User 010', location: 'Istanbul', lastName: 'Frances', firstName: 'Rossini', amount: 36 },
    { status: 'Pending', id: 10, date: new Date("2023-07-01") ,sender: 'User 011', location: 'Istanbul', lastName: 'Roxie', firstName: 'Harvey', amount: 65 },
    { status: 'Success', id: 11, date: new Date("2023-07-01") ,sender: 'User 012', location: 'Istanbul', lastName: 'Targaryen', firstName: 'Daenerys', amount: 30 },
    { status: 'Failed', id: 12, date: new Date("2023-07-01") ,sender: 'User 013', location: 'Istanbul', lastName: 'Melisandre', firstName: 'Dean', amount: 50 },
    { status: 'Failed', id: 13, date: new Date("2023-07-01") ,sender: 'User 014', location: 'Istanbul', lastName: 'Clifford', firstName: 'Ferrara', amount: 44 },
    { status: 'Pending', id: 14, date: new Date("2023-07-01") ,sender: 'User 015', location: 'Istanbul', lastName: 'Frances', firstName: 'Rossini', amount: 36 },
    { status: 'Pending', id: 15, date: new Date("2023-07-01") ,sender: 'User 016', location: 'Istanbul', lastName: 'Roxie', firstName: 'Harvey', amount: 65 },
  ];

  const TableData = {
    columns,
    rows,
  }

  export  { TableData }
  