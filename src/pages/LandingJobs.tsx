import React from 'react'
import LandingAppBar from '../components/LandingAppBar'
import { Box, Container, Grid, Card } from '@mui/material'
import Footer from '../components/Footer';

const LandingJobs:React.FC<any> = () => {
  return (
    <LandingAppBar>
      <>
        <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Card sx={{ p: 1, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>

                </Card>
              </Grid>
              <Grid item xs={9}>
                <Card sx={{ mb: 3, p: 1, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>

                </Card>
                <Card sx={{ mb: 3, p: 3, backgroundColor: 'rgb(34, 43, 69)', boxShadow: 3 }}>
                  <Container>
                    <Grid container spacing={2}>
                      {[...new Array(5)].map(dt => (
                        <Grid item xs={12}>
                          <Card sx={{ p: 1 }}>

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