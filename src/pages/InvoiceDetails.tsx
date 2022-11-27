import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, Grid, Card, Divider, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CustomBreadcrumbs from '../components/Breadcrumbs'

const InvoiceDetails:React.FC<any> = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const sideBtn = [
    'Send Invoice',
    'Print',
    'Download',
    'Edit'
  ]

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant='text'
          sx={{ my: 2 }}
          onClick={() => navigate('/dashboard/invoices')}
        >
          <ArrowBackIosIcon />
          Back
        </Button>
        <CustomBreadcrumbs
          parent={'Invoices'}
          child={id}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Card sx={{
            p: 3
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 2
            }}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Adris Studios Tech Inc.
              </Typography>
              <Typography variant='h6'>
                Invoice : <span style={{ fontWeight: 'bold' }}>#0001</span>
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography>XYZ Jacinto St.</Typography>
                <Typography>adris-inc.com</Typography>
                <Typography>(120) 456 789</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: '500' }}>
                  Invoice Date: 20 Aug 2022
                </Typography>
                <Typography sx={{ fontWeight: '500' }}>
                  Due Date: 20 Aug 2022
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 4 }} />
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Invoice To</Typography>
                <Typography>Jessy Cory</Typography>
                <Typography>405 Mutberry Rd. Mc Grady, NC, 28649</Typography>
                <Typography>redq@company.com</Typography>
                <Typography>(123) 456 789</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Payment Info:</Typography>
                <Typography><small>Bank</small>: Bank of America</Typography>
                <Typography><small>Account Number</small>: 1234567890</Typography>
                <Typography><small>SWIFT code</small>: VS70134</Typography>
                <Typography><small>Country</small>: United States</Typography>
              </Box>
            </Box>
            <Box sx={{
              mt: 10
            }}>
              <table style={{ width: '100%' }}>
                <thead style={{ backgroundColor: '#e1e1e1' }}>
                  <tr>
                    <th>S.NO</th>
                    <th>ITEMS</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                {[...new Array(5)].map((dt, i) => (
                  <tr key={i} style={{ textAlign: 'center' }}>
                    <td style={{ paddingTop: 10, paddingBottom: 10 }}>1</td>
                    <td>Calendar App Customization</td>
                    <td>2</td>
                    <td>$120</td>
                    <td>$120</td>
                  </tr>
                ))}
              </table>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 5
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <Box sx={{
                  textAlign: 'end'
                }}>
                  <Typography sx={{ pb: 1 }}>Sub Total:</Typography>
                  <Typography sx={{ pb: 1 }}>Tax Amount:</Typography>
                  <Typography sx={{ pb: 1 }}>Discount : 5%</Typography>
                  <Typography sx={{ pb: 1 }} variant='h5'>Grand total :</Typography>
                </Box>
                <Box sx={{
                  ml: 10,
                  textAlign: 'end'
                }}>
                  <Typography sx={{ pb: 1 }}>$3155</Typography>
                  <Typography sx={{ pb: 1 }}>$700</Typography>
                  <Typography sx={{ pb: 1 }}>$10</Typography>
                  <Typography sx={{ pb: 1 }} variant='h5'>$3845</Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Typography sx={{ color: 'gray', my: 1 }}>
                Note: Thank you for doing Business with us.
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{
            p: 2
          }}>
            {sideBtn.map(btn => (
              <Card sx={{
                mb: 2,
                p: 1,
                backgroundColor: 'greenyellow',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <Typography>
                  {btn}
                </Typography>
              </Card>
            ))}
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default InvoiceDetails