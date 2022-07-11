import Dashboard from '../components/dashboard/Dashboard';
import Layout from '../components/layout/Layout';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {

  const { data, error } = useSWR('/api/staticdata', fetcher, { fallbackData: {}});
  if (error) return <div>Failed to load</div>;
  console.log(data);
  const rows = [
    { id: 1, name: 'Hello', language: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'language', headerName: 'Language', width: 150 },
  ];

  return (
    <Layout title='Home Layout'>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Dashboard />
    </Layout>
  )
}
