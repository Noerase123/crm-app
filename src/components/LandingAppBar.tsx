import React from 'react'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { useNavigate } from 'react-router-dom'

interface IProp {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: IProp) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const LandingAppBar:React.FC<IProp> = props => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: 'rgb(34, 43, 69)' }}>
          <Toolbar>
            <Container>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box onClick={() => navigate('/')}>
                  <Typography variant="h6" component="div">
                    ADRIS
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box onClick={() => navigate('/')}>
                    <Typography variant='h6' sx={{
                      '&:hover': {
                        borderBottom: '1px solid #e1e1e1',
                        cursor: 'pointer'
                      }
                    }}>
                      How it works?
                    </Typography>
                  </Box>
                  {/* <Typography variant='h6' sx={{
                    ml: 4,
                    '&:hover': {
                      borderBottom: '1px solid #e1e1e1',
                      cursor: 'pointer'
                    }
                  }}>
                    About Us
                  </Typography> */}
                  <Box onClick={() => navigate('/jobs')}>
                    <Typography variant='h6' sx={{
                      ml: 4,
                      py: 0.5,
                      px: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgb(25, 118, 210)',
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}>
                      Find Jobs
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box>
        <Toolbar />
        <Box sx={{ color: '#fff' }}>
          {props.children}
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default LandingAppBar