import { Box } from '@mui/material'
import React from 'react'
import CustomTable from '../components/Table'
import CustomBreadcrumbs from '../components/Breadcrumbs'
import { useNavigate } from 'react-router-dom'

const Jobs:React.FC<any> = () => {
  const navigate = useNavigate()

  const columns = [
    {
      id: 'title',
      label: 'Job Title'
    },
    {
      id: 'company',
      label: 'Company'
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
      title: 'Associate Software Engineer',
      company: 'Accenture Inc.',
      email: 'sample@acn.ph',
      location: 'testing st 123',
      phone: '09777240159',
      status: 'Active',
      content: 'testing content here just to let you know that it fits on the description decide on what\'s up on the content'
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture Inc.',
      email: 'sample@acn.ph',
      location: 'testing st 123',
      phone: '09777240159',
      status: 'Active',
      content: 'testing content here just to let you know that it fits on the description decide on what\'s up on the content'
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture Inc.',
      email: 'sample@acn.ph',
      location: 'testing st 123',
      phone: '09777240159',
      status: 'Active',
      content: 'testing content here just to let you know that it fits on the description decide on what\'s up on the content'
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture Inc.',
      email: 'sample@acn.ph',
      location: 'testing st 123',
      phone: '09777240159',
      status: 'Active',
      content: 'testing content here just to let you know that it fits on the description decide on what\'s up on the content'
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture Inc.',
      email: 'sample@acn.ph',
      location: 'testing st 123',
      phone: '09777240159',
      status: 'Active',
      content: 'testing content here just to let you know that it fits on the description decide on what\'s up on the content'
    }
  ]

  return (
    <>
      <Box sx={{
        mb: 3
      }}>
        <CustomBreadcrumbs
          parent={'Apps'}
          child={'Jobs'}
        />
      </Box>
      <CustomTable
        columns={columns}
        rows={rowData}
        type='job'
        create={() => navigate('/dashboard/jobs/create')}
        // view={() => navigate('/dashboard/employees/123')}
      />
    </>
  )
}

export default Jobs