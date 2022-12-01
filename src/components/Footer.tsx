import React from 'react'
import { Box, Divider, Container, Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer:React.FC<any> = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(39, 53, 94)' }}>
      <Divider sx={{ border: '1px solid #e1e1e1' }} />
      <Container sx={{ py: 8 }}>
        <Grid container>
          <Grid item xs={4}>    
            <Typography>ADRIS JOBS</Typography>
            <Box sx={{ display: 'flex', mt: 3 }}>
              <GitHubIcon sx={{ mr: 1 }} />
              <InstagramIcon sx={{ mr: 1 }} />
              <YouTubeIcon sx={{ mr: 1 }} />
              <FacebookIcon sx={{ mr: 1 }} />
              <TwitterIcon sx={{ mr: 1 }} />
            </Box>
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
  )
}

export default Footer