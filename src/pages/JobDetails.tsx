import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import { Box, Divider, Container, Grid, Typography, Input, Button } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import Footer from '../components/Footer';

const LandingJobsDetails:React.FC<any> = () => {
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
                  borderRadius: 2,
                  '&:hover': {
                    cursor: 'pointer'
                  }
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
                  borderRadius: 2,
                  '&:hover': {
                    cursor: 'pointer'
                  }
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
        <Box sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
          <Container sx={{ py: 8 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Apply for this job</Typography>
            <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center' }}>
              We develop intelligent solutions for companies to reduce their operational costs, increase their profitability and improve service quality.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Input
                    sx={{ border: '1px solid #e1e1e1', color: '#fff', borderRadius: 2, p: 2 }}
                    placeholder='Your e-mail address'
                    size='small'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgb(25, 118, 210)', borderRadius: 2, border: '1px solid rgb(25, 118, 210)', p: 2, width: '100%', '&:hover': { backgroundColor: 'rgb(25, 118, 210)', color: '#fff' } }}>
                    <UploadIcon />
                    <Typography>Upload CV</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Input
                sx={{ border: '1px solid #e1e1e1', color: '#fff', borderRadius: 2, my: 2, p: 2 }}
                placeholder='Your question for us'
                size='small'
                multiline
                rows={4}
                fullWidth
              />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' sx={{ backgroundColor: 'rgb(25, 118, 210' }}>
                  Apply now
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </>
    </LandingAppBar>
  )
}

export default LandingJobsDetails