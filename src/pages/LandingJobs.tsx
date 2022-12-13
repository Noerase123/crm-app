import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LandingAppBar from '../components/LandingAppBar'
import {
  Box, Container, Grid, Card, Input, IconButton, Typography
} from '@mui/material'
import Footer from '../components/Footer';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterJob from '../components/FilterJob';

const LandingJobs:React.FC<any> = () => {
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <LandingAppBar currentPage='jobs'>
      <>
        <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={3}>
              <Grid id='filterSearch' item xs={12} md={4} lg={3}>
                <FilterJob />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Box sx={{ 
                  position: 'sticky',
                  top: 0,
                  left: 0,
                  right: 0
                }}>
                  <Box sx={{
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    backgroundColor: 'rgb(24, 30, 48)',
                    p: 1,
                    boxShadow: 3,
                    mb: 3
                  }}>
                    <IconButton id='filterIconJobs' onClick={() => setOpenFilter(!openFilter)}>
                      <FilterAltIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <SearchOutlinedIcon />
                    <Input size='small' type='text' placeholder='Search by job keywords, category, location' style={{ color: '#fff', border: 'none', padding: 10, backgroundColor: 'rgb(24, 30, 48)', width: '100%'}} />
                  </Box>
                  {openFilter && (
                    <FilterJob />
                  )}
                </Box>
                <Card sx={{ mb: 3, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>
                  <Typography variant='body2' sx={{ color: '#fff', mb: 1 }}>Recently Added</Typography>
                  <Grid container spacing={2}>
                    {[...new Array(3)].map(dt => (
                      <Grid item xs={12}>
                        <Card sx={{ p: 2, backgroundColor: '#FDFFD5' }} onClick={() => navigate('/job-details')}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex' }}>
                              <img
                                src={require('../assets/team-player.svg').default}
                                alt='find-job'
                                style={{ height: 50, width: 50 }}
                              />
                              <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography>Accenture Inc.</Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Senior Software Engineer</Typography>
                                <Typography>Full-time - Senior</Typography>
                              </Box>
                            </Box>
                            <Typography>
                              A month ago
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
                <Card sx={{ mb: 3, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>
                  <Typography variant='body2' sx={{ color: '#fff', mb: 1 }}>Posted this month</Typography>
                  <Grid container spacing={2}>
                    {[...new Array(15)].map(dt => (
                      <Grid item xs={12}>
                        <Card sx={{ p: 2 }} onClick={() => navigate('/job-details')}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex' }}>
                              <img
                                src={require('../assets/team-player.svg').default}
                                alt='find-job'
                                style={{ height: 50, width: 50 }}
                              />
                              <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography>Accenture Inc.</Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Senior Software Engineer</Typography>
                                <Typography>Full-time - Senior</Typography>
                              </Box>
                            </Box>
                            <Typography>
                              A month ago
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />
      </>
    </LandingAppBar>
  )
}

export default LandingJobs