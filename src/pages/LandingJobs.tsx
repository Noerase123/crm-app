import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import {
  Box, Container, Grid, Card, Input, Button,
  Typography, FormControl, InputLabel, Select, MenuItem
} from '@mui/material'
import Footer from '../components/Footer';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const LandingJobs:React.FC<any> = () => {
  return (
    <LandingAppBar currentPage='jobs'>
      <>
        <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ p: 2, color: '#000', backgroundColor: '#fff', boxShadow: 3 }}>
                  <Typography>Filter your search</Typography>
                  <Box sx={{ my: 2 }}>
                    <FormControl size='small' fullWidth>
                      <InputLabel>Job Type</InputLabel>
                      <Select
                        value={null}
                        label="Job Type"
                        onChange={() => console.log('hello world')}
                      >
                        <MenuItem value={10}>By Contract</MenuItem>
                        <MenuItem value={10}>Part-Time</MenuItem>
                        <MenuItem value={20}>Full-Time</MenuItem>
                        <MenuItem value={30}>Internship</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <FormControl size='small' fullWidth>
                      <InputLabel>Experience</InputLabel>
                      <Select
                        value={null}
                        label="Experience"
                        onChange={() => console.log('hello world')}
                      >
                        <MenuItem value={10}>None</MenuItem>
                        <MenuItem value={10}>Junior (1 - 3 yrs)</MenuItem>
                        <MenuItem value={20}>Medior (3 - 6 yrs)</MenuItem>
                        <MenuItem value={30}>Senior (5 - 10 yrs)</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <FormControl size='small' fullWidth>
                      <InputLabel>Technologies</InputLabel>
                      <Select
                        value={null}
                        label="Experience"
                        onChange={() => console.log('hello world')}
                      >
                        <MenuItem value={10}>None</MenuItem>
                        {[
                          'ReactJS',
                          'Angular',
                          'Vue.js',
                          'Node.js',
                          'Javascript',
                          'Typescript',
                          'Svetle',
                          'Java',
                          'Kotlin',
                          'PHP',
                          'Bash',
                          'Swift',
                          'Python',
                          'Ruby',
                          'C#',
                          'C++',
                          'Objective-C',
                          'Rust',
                          'Flutter',
                          'Dart'
                        ].map((dt, i) => (
                          <MenuItem key={i} value={10}>{dt}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Button variant='contained' fullWidth>
                      search
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  backgroundColor: 'rgb(24, 30, 48)',
                  p: 1,
                  boxShadow: 3,
                  mb: 3
                }}>
                  <SearchOutlinedIcon />
                  <Input size='small' type='text' placeholder='Search by job keywords, category, location' style={{ color: '#fff', border: 'none', padding: 10, backgroundColor: 'rgb(24, 30, 48)', width: '100%'}} />
                </Box>
                <Card sx={{ mb: 3, p: 2, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>
                  <Container>
                    <Grid container spacing={2}>
                      {[...new Array(5)].map(dt => (
                        <Grid item xs={12}>
                          <Card sx={{ p: 2 }}>
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
                  </Container>
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