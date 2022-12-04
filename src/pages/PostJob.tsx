import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import {
  Box, Container, Typography, Card, TextField, FormControl,
  InputLabel, Select, MenuItem, Checkbox, Grid
} from '@mui/material'
import Footer from '../components/Footer';
import Stepper from '../components/Stepper';

const PostJob:React.FC<any> = () => {
  return (
    <LandingAppBar currentPage='new-job'>
      <>
        <Box sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
          <Container sx={{ py: 8 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Post your job ad for just <span style={{ fontSize: 30 }}>$49</span> for the next 3 months!
            </Typography>
            <Typography sx={{ color: 'rgb(174, 176, 180)', textAlign: 'center', px: 20 }}>
              Share your job ad with 50,000+ remote JavaScript developers that are searching for new opportunities. It will be featured in a yellow box at the top of the job list and featured in our weekly newsletter.
            </Typography>
            <Box sx={{ mt: 12 }}>
              <Card sx={{ py: 5, px: 15, backgroundColor: '#f1f1f1', color: '#000', boxShadow: 1 }}>
                <Typography variant='h4' sx={{ fontWeight: '600', mb: 3 }}>Tell us about your job</Typography>
                <Stepper
                  steps={['About the job', 'Preview', 'Payment']}
                  stepContainers={[
                    <>
                      <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <TextField
                          label='Job title'
                          helperText='Example: Senior Software Engineer'
                          size='small'
                          sx={{ width: '60%' }}
                          fullWidth
                        />
                        <Typography>REQUIRED FIELDS <span style={{ color: 'red' }}>*</span></Typography>
                      </Box>
                      <Box sx={{ width: '60%' }}>
                        <Box sx={{ my: 1 }}>
                          <TextField
                            label='Candidate region'
                            helperText='Optional: if you need the candidate to be in a particular location and timezone'
                            size='small'
                            fullWidth
                          />
                        </Box>
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
                      </Box>
                      <Box sx={{ my: 2 }}>
                        <Typography>Select Programming Technologies</Typography>
                        <Box sx={{ mt: 1, border: '1px solid #000', p: 1 }}>
                          <Grid container spacing={2}>
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
                              <Grid item>
                                <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Checkbox />
                                  <Typography>
                                    {dt}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </Box>
                      <Box sx={{ width: '60%' }}>
                        <Box sx={{ my: 1 }}>
                          <TextField
                            label='Company name'
                            helperText='Enter your company or organizations name'
                            size='small'
                            fullWidth
                          />
                        </Box>
                        <Box sx={{ my: 1 }}>
                          <TextField
                            label='Email'
                            helperText='Enter your email address'
                            size='small'
                            fullWidth
                          />
                        </Box>
                        <Box sx={{ my: 1 }}>
                          <TextField
                            label='Apply job URL'
                            helperText='Enter your application link to your website'
                            size='small'
                            fullWidth
                          />
                        </Box>
                        <Box sx={{ my: 1 }}>
                          <TextField
                            label='Job description'
                            multiline
                            rows={15}
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </>,
                    <>
                      <Typography variant='h2'>
                        Hello world
                      </Typography>
                    </>,
                    <>
                      <Typography variant='h2'>
                        Payment
                      </Typography>
                    </>,
                    <>
                      <Typography variant='h2'>
                        All Done!
                      </Typography>
                    </>
                  ]}
                />
                
              </Card>
            </Box>
          </Container>
        </Box>
        <Footer />
      </>
    </LandingAppBar>
  )
}

export default PostJob