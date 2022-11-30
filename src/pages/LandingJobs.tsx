import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import { Box, Divider, Container, Grid, Typography } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const LandingJobs:React.FC<any> = () => {
  return (
    <LandingAppBar>
      <>
        <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
          <Container sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <Box>
                <Typography variant='h4'>
                  Senior Software Engineer
                </Typography>
                <Typography>
                  San Francisco, CA - Full time
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{
                  backgroundColor: 'rgb(25, 118, 210)',
                  p: 2,
                  borderRadius: 2
                }}>
                  <Typography>
                    Apply now
                  </Typography>
                </Box>
                <Box sx={{
                  border: '1px solid rgb(25, 118, 210)',
                  color: 'rgb(25, 118, 210)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  ml: 2,
                  borderRadius: 2
                }}>
                  <Typography>
                    Refer a friend
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ my: 4, backgroundColor: 'gray' }} />
            <Grid container spacing={3}>
              <Grid item sx={{ width: '72%' }}>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>Who we are</Typography>
                  <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                    We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>What we’re looking for</Typography>
                  <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                    Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                  </Typography>
                </Box>
                <Box sx={{ m: 2 }}>
                  {[...new Array(5)].map((dt, i) => (
                    <Box key={i} sx={{ display: 'flex', mb: 1 }}>
                      <CheckCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
                      <Typography>Our sign up is dead simple. We only require your basic company information</Typography>
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: '600', mb: 1 }}>Why to apply</Typography>
                  <Typography sx={{ mb: 1, lineHeight: 1.6 }}>
                    We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={{ width: '28%' }}>
                <Box sx={{ p: 3, backgroundColor: 'rgb(25, 118, 210)', borderRadius: 2 }}>
                  <Typography>You like what you're reading?</Typography>
                  <Typography>Get free online programming tips and resources delivered directly to your inbox</Typography>
                </Box>
                <Box sx={{ p: 3, backgroundColor: 'rgb(34, 43, 69)', borderRadius: 2, boxShadow: 1, mt: 3 }}>
                  <Typography>Interactive decision support system</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
          <Divider sx={{ border: '1px solid #e1e1e1' }} />
          <Container sx={{ py: 8 }}>
            <Grid container>
              <Grid item xs={4}>    
                <Typography>ADRIS JOBS</Typography>
              </Grid>
              <Grid item xs={4}>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: 'grid' }}>
                  <Typography>COMPANY</Typography>
                  <Typography variant='caption'>About Us</Typography>
                  <Typography variant='caption'>Blog</Typography>
                  <Typography variant='caption'>Contact Us</Typography>
                  <Typography variant='caption'>Work with Us</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </LandingAppBar>
  )
}

export default LandingJobs