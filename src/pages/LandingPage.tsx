import * as React from 'react';
import LandingAppBar from '../components/LandingAppBar';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Button,
  Input,
  Typography,
  Box,
  Container
} from '@mui/material'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import JobList from '../components/JobList';

import Footer from '../components/Footer';

const Content: React.FC = () => {
  const navigate = useNavigate()

  const alertWarning = () => window.alert('Unavailable at the moment')

  return (
    <>
      <LandingAppBar>
        <>
          <Box sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ my: 10 }}>
                    <Typography variant='h3' sx={{ fontWeight: '500' }}>
                      Find the world's best remote job
                    </Typography>
                    <Typography sx={{ lineHeight: 1.6, my: 2 }}>
                      Productivity tools can either help you or get in the way.
                      AdrisTech aims to remove all barriers between you and just getting stuff done.
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-start'
                    }}>
                      <Button
                        sx={{
                          backgroundColor: 'rgb(25, 118, 210)',
                          color: '#fff',
                          px: 2,
                          py: 1,
                          my: 2,
                          '&:hover': {
                            backgroundColor: 'rgb(25, 118, 210)'
                          }
                        }}
                        onClick={() => navigate('/jobs')}
                      >
                        <Typography>
                          Explore
                        </Typography>
                      </Button>
                      <Box
                        sx={{
                          ml: 1,
                          color: 'rgb(25, 118, 210)',
                          px: 2,
                          py: 1,
                          my: 2,
                          borderRadius: 1,
                          display: 'flex',
                          '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: 'rgb(25, 118, 210)',
                            color: '#fff'
                          }
                        }}
                        onClick={() => alertWarning()}
                      >
                        <PlayCircleOutlinedIcon sx={{ mr: 1 }} />
                        <Typography>
                          Watch the video
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      backgroundColor: 'rgb(24, 30, 48)',
                      p: 1
                    }}>
                      <SearchOutlinedIcon />
                      <Input size='small' type='text' style={{ color: '#fff', border: 'none', padding: 10, backgroundColor: 'rgb(24, 30, 48)', width: '100%' }} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ my: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={require('../assets/front.svg').default}
                      alt='landing-page'
                      style={{
                        height: 300,
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          {/* <Box sx={{ */}
          {/*   backgroundColor: 'rgb(34, 43, 69)', */}
          {/*   width: '100%', */}
          {/*   height: 150, */}
          {/*   borderRadius: 2000, */}
          {/*   mt: -10 */}
          {/* }} /> */}
          {/* <img */}
          {/*   src={require('../assets/curve.svg').default} */}
          {/*   alt='waves' */}
          {/* /> */}
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{
                my: 6,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {[
                  'airbnb',
                  'amazon',
                  'fitbit',
                  'netflix',
                  'google',
                  'paypal'
                ].map((dt, i) => (
                  <Box key={i} sx={{
                    width: 100,
                    height: 40,
                    mx: 2
                  }}>
                    <img style={{ color: '#e1e1e1' }} src={`https://assets.maccarianagency.com/svg/logos/${dt}-original.svg`} alt='airbnb' />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ backgroundColor: 'rgb(24, 30, 48)' }}>
            <Container sx={{ py: 10 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant='h5' fontWeight={'bold'}>What is it about?</Typography>
                  <Typography>Fill out our standardized application on our platform. Most applicants finish in under an hour.</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant='h5' fontWeight={'bold'}>Who is it for?</Typography>
                  <Typography>Fill out our standardized application on our platform. Most applicants finish in under an hour.</Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: '#222B45' }}>
            <Container sx={{ py: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ textAlign: 'center', color: 'yellow' }}>PROCESS</Typography>
                  <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Our process to find you a new job is fast</Typography>
                  <Typography variant='h6' sx={{ px: 9, textAlign: 'center' }}>Fill out our standardized application on our platform. Most applicants finish in under an hour.</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                    <Box
                      sx={{
                        backgroundColor: 'rgb(25, 118, 210)',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                      onClick={() => navigate('/jobs')}
                    >
                      <Typography sx={{ mr: 1 }}>Start searching</Typography>
                      <EastOutlinedIcon />
                    </Box>
                  </Box>
                </Grid>
                {[
                  'Complete your application',
                  'Select Companies',
                  'Choose your offer'
                ].map((dt, i) => (
                  <Grid key={i} item xs={12} md={4} lg={4}>
                    {i === 0 && (
                      <HowToRegOutlinedIcon sx={{ color: '#7CFC00', width: 60, height: 60 }} />
                    )}
                    {i === 1 && (
                      <PlaylistAddCheckOutlinedIcon sx={{ color: 'rgb(25, 118, 210)', width: 60, height: 60 }} />
                    )}
                    {i === 2 && (
                      <FlightTakeoffOutlinedIcon sx={{ color: 'yellow', width: 60, height: 60 }} />
                    )}
                    <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1, }}>
                      {dt}
                    </Typography>
                    <Typography sx={{ color: 'rgb(174, 176, 180)' }}>
                      Fill out our standardized application on our platform. Most applicants finish in under an hour.
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: 'rgb(24, 30, 48)' }}>
            <Container sx={{ py: 8 }}>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ my: 10, height: '100%' }}>
                    <Typography variant='h4' sx={{ mb: 1 }}>Easily find leads and customers</Typography>
                    <Typography sx={{ color: 'rgb(174, 176, 180)', lineHeight: 1.6, mb: 1 }}>Send one-off and automated email, push, and in-app messages to people. Create better stories.</Typography>
                    <Typography sx={{ color: 'rgb(174, 176, 180)', lineHeight: 1.6, mb: 1 }}>We get thousands of job postings weekly, but only accept the openings at the top companies. We get thousands of job postings weekly, but only accept the openings at the top companies.</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  {/* images */}
                  <Box sx={{ my: 4 }}>
                    <img
                      src={require('../assets/team-player.svg').default}
                      alt='landing-page'
                      style={{
                        height: 300,
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <JobList />
          <Box sx={{ backgroundColor: 'rgb(24, 30, 48)' }}>
            <Container sx={{ py: 8 }}>
              <Box sx={{
                borderRadius: 2,
                backgroundColor: 'rgb(39, 53, 94)',
                p: 5
              }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>
                  Hiring? Candidates are working for you
                </Typography>
                <Typography sx={{ textAlign: 'center', my: 1, color: 'rgb(174, 176, 180)' }}>
                  We get thousands of job postings weekly, but only accept the openings at the top companies.
                </Typography>
                <Box sx={{ mt: 4, mb: 2 }}>
                  <Grid container>
                    <Grid item xs={12} md={4} lg={4}>
                      <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        300+
                      </Typography>
                      <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center' }}>
                        300 + component compositions, which will help you to build any page easily.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        45+
                      </Typography>
                      <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center' }}>
                        45 + landing and supported pages to Build a professional website.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        99%
                      </Typography>
                      <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center' }}>
                        99% of our customers rated 5-star our themes over 5 years.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Button
                    sx={{
                      backgroundColor: 'rgb(25, 118, 210)',
                      color: '#fff',
                      px: 2,
                      py: 1,
                      my: 2,
                      '&:hover': {
                        backgroundColor: 'rgb(25, 118, 210)'
                      }
                    }}
                    onClick={() => navigate('/jobs')}
                  >
                    <Typography>
                      Explore
                    </Typography>
                  </Button>
                  <Box
                    sx={{
                      ml: 1,
                      color: 'rgb(25, 118, 210)',
                      px: 2,
                      py: 1,
                      my: 2,
                      borderRadius: 1,
                      display: 'flex',
                      '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'rgb(25, 118, 210)',
                        color: '#fff'
                      }
                    }}
                    onClick={() => alertWarning()}
                  >
                    <PlayCircleOutlinedIcon sx={{ mr: 1 }} />
                    <Typography>
                      Watch the video
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
            <Container sx={{ py: 8 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  {/* images */}
                  <Box sx={{ my: 4 }}>
                    <img
                      src={require('../assets/find-job.svg').default}
                      alt='landing-page'
                      style={{
                        height: 300,
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant='h4'>Find Jobs with Adris</Typography>
                  <Typography sx={{ color: 'rgb(174, 176, 180)' }}>Send one-off and automated email, push, and in-app messages to people. Create better stories.</Typography>
                  <Box sx={{ display: 'grid', alignItems: 'center', height: 200 }}>
                    {[...new Array(4)].map((dt, i) => (
                      <Box key={i} sx={{ display: 'flex' }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: '#7CFC00' }} />
                        <Typography sx={{ ml: 1 }}>Lifetime Access</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ borderRadius: 5, p: 8, backgroundColor: 'rgb(25, 118, 210)', alignItems: 'center' }}>
                    <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '600' }}>Subscribe to our newsletter</Typography>
                    <Typography variant='h6' sx={{ textAlign: 'center', pt: 1, pb: 3 }}>Don't lose a chance to be among the firsts to know about our upcoming news and updates.</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Input
                        placeholder='Enter your email'
                        sx={{
                          border: '1px solid #fff',
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          width: 400,
                          color: '#fff'
                        }}
                      />
                      <NotificationsNoneIcon sx={{ ml: -5 }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </>
      </LandingAppBar>
    </>
  )
}

export default Content
