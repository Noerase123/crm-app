import React from 'react'
import { Box } from '@mui/material'
import CustomTable from '../components/Table'
import CustomBreadcrumbs from '../components/Breadcrumbs'
import { useNavigate } from 'react-router-dom'

const Invoices:React.FC<any> = () => {
  const navigate = useNavigate()

  const columns = [
    {
      id: 'invoice',
      label: 'Invoice'
    },
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'date',
      label: 'Date'
    },
    {
      id: 'amount',
      label: 'Amount'
    },
    {
      id: 'status',
      label: 'Status'
    }
  ]

  const rows = [
    {
      invoice: '#12345',
      name: 'John',
      email: 'john@mail.com',
      date: '2022-09-22',
      amount: 'P10,000.00',
      status: 'Paid'
    },
    {
      invoice: '#12345',
      name: 'John',
      email: 'john@mail.com',
      date: '2022-09-22',
      amount: 'P10,000.00',
      status: 'Paid'
    },
    {
      invoice: '#12345',
      name: 'John',
      email: 'john@mail.com',
      date: '2022-09-22',
      amount: 'P10,000.00',
      status: 'Paid'
    },
    {
      invoice: '#12345',
      name: 'John',
      email: 'john@mail.com',
      date: '2022-09-22',
      amount: 'P10,000.00',
      status: 'Paid'
    },
  ]

  return (
    <>
      <Box sx={{
        mb: 3
      }}>
        <CustomBreadcrumbs
          parent={'Apps'}
          child={'Invoices'}
        />
      </Box>
      <CustomTable
        rows={rows}
        columns={columns}
        create={() => navigate('/dashboard/invoices/create')}
        view={() => navigate('/dashboard/invoices/123')}
        isDisabledClientView={false}
      />
    </>
  )
}

export default Invoices