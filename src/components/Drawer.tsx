import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material'

import CustomAccordion from './Accordion';
import NavBar from './NavBar';

const drawerWidth = 240;

interface IProp {
  children: React.ReactNode
}

const CustomDrawer:React.FC<IProp> = ({ children }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
      {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <CustomAccordion
            expanded
            data={[
              {
                label: 'Dashboard',
                navigate: () => {},
                children: [
                  {
                    label: 'Sales',
                    to: '/employees',
                    navigate: () => {}
                  },
                  {
                    label: 'Analytics',
                    to: '/employees',
                    navigate: () => {}
                  }
                ]
              },
              {
                label: 'Apps',
                navigate: () => {},
                children: [
                  {
                    label: 'Email List',
                    to: '/dashboard/employees',
                    navigate: () => {}
                  },
                  {
                    label: 'Clients',
                    to: '/employees',
                    navigate: () => {}
                  },
                  {
                    label: 'Employees',
                    to: '/dashboard/employees',
                    navigate: () => {}
                  },
                  {
                    label: 'Jobs',
                    to: '/dashboard/jobs',
                    navigate: () => {}
                  },
                  {
                    label: 'Invoice',
                    to: '/dashboard/invoices',
                    navigate: () => {}
                  }
                ]
              }
            ]}
          />
          <Divider />
          <CustomAccordion
            expanded
            data={[
              {
                label: 'Account',
                navigate: () => {},
                children: [
                  {
                    label: 'Profile',
                    to: '/dashboard/employees',
                    navigate: () => {}
                  },
                  {
                    label: 'Logout',
                    to: '/dashboard/employees',
                    navigate: () => {}
                  }
                ]
              }
            ]}
          />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f0f0f0' }}>
        <Toolbar />
        { children }
      </Box>
    </Box>
  );
}

export default CustomDrawer