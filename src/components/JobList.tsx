import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card
} from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const JobList:React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
      <Container>
        <Box sx={{ py: 5 }}>
          <Typography variant='h4' sx={{ mb: 1 }}>Top developer jobs listed in our portal</Typography>
          <Typography sx={{ color: 'rgb(174, 176, 180)' }}>We get thousands of job postings weekly, but only accept the openings at the top companies.</Typography>
        </Box>
        <Grid container spacing={3}>
          {[...new Array(12)].map((dt, i) => (
            <Grid item xs={6} md={4} lg={4} key={i}>
              <Card sx={{
                p: 2,
                backgroundColor: 'rgb(39, 53, 94)',
                color: '#fff',
                borderRadius: 3,
                transition: '0.4s',
                boxShadow: 5,
                '&:hover': {
                  borderRight: '5px solid #0081ff',
                  cursor: 'pointer'
                }
              }}>
                <Box onClick={() => navigate('/job-details')} sx={{ display: 'grid', height: 150, alignItems: 'center' }}>
                  <Typography variant='caption' sx={{ width: 100, textAlign: 'center', backgroundColor: '#0081ff', px: 1, borderRadius: 1 }}>
                    Programming
                  </Typography>
                  <Typography variant='h6'>Web designer internship</Typography>
                  <Box sx={{ color: 'rgb(174, 176, 180)', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <LocationOnOutlinedIcon sx={{ width: 22, height: 22 }} /> 
                    <Typography sx={{ ml: 1 }}>
                      Paris, France
                    </Typography>
                  </Box>
                  <Box sx={{ color: 'rgb(174, 176, 180)', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <AccessTimeOutlinedIcon sx={{ width: 22, height: 22 }} />
                    <Typography sx={{ ml: 1 }}>
                      Part-time
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center'  
        }}>
          <Box sx={{
            my: 4,
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
          }}>
            <Typography sx={{ mr: 1 }}>View all</Typography>
            <EastOutlinedIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default JobList