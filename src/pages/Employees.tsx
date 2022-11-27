import { Box } from '@mui/material'
import React from 'react'
import CustomTable from '../components/Table'
import CustomBreadcrumbs from '../components/Breadcrumbs'
import { useNavigate } from 'react-router-dom'

const Employees:React.FC<any> = () => {
  const navigate = useNavigate()

  const columns = [
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'position',
      label: 'Position'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'location',
      label: 'Location'
    },
    {
      id: 'phone',
      label: 'Phone'
    }
  ]

  const rowData = [
    {
      name: 'John Isaac',
      position: 'Testing',
      email: 'Testing',
      location: 'Testing',
      phone: 'Testing',
      status: 'Active'
    },
    {
      name: 'Kathlyn Grace',
      position: 'Testing',
      email: 'Testing',
      location: 'Testing',
      phone: 'Testing',
      status: 'Active'
    },
    {
      name: 'Testing',
      position: 'Testing',
      email: 'kathlyngraceventures@gmail.com',
      location: 'Testing',
      phone: 'Testing',
      status: 'Active'
    },
    {
      name: 'Testing',
      position: 'Testing',
      email: 'Testing',
      location: 'Testing',
      phone: 'Testing',
      status: 'Active'
    }
  ]

  return (
    <>
      <Box sx={{
        mb: 3
      }}>
        <CustomBreadcrumbs
          parent={'Apps'}
          child={'Employees'}
        />
      </Box>
      <CustomTable
        columns={columns}
        rows={rowData}
        create={() => navigate('/dashboard/employees/create')}
        view={() => navigate('/dashboard/employees/123')}
        type={'employee'}
      />
    </>
  )
}

export default Employees