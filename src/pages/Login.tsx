import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, TextField, Card, Grid, Button } from '@mui/material'

const Login:React.FC<any> = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{
        backgroundColor: 'rgb(34, 43, 69)',
        height: 280
      }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 20 }}>
          <Grid item xs={11} md={7} lg={4}>
            <Card sx={{ p: 3 }}>
              <Typography sx={{ textAlign: 'center' }}>LOGIN YOUR ACCOUNT</Typography>
              <Box sx={{ my: 1 }}>
                <TextField
                  label='Username'
                  size='small'
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <TextField
                  label='Password'
                  type='password'
                  size='small'
                  fullWidth
                />
              </Box>
              <Box>
                <Button
                  onClick={() => navigate('/dashboard/jobs')}
                  variant='contained'
                  sx={{ backgroundColor: 'rgb(34, 43, 69)' }}
                  fullWidth
                >
                  LOGIN
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login