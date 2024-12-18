import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import AppLayout from './components/AppLayout';

import LandingPage from './pages/LandingPage';
import LandingJobs from './pages/LandingJobs';
import LandingJobsDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';

import EmployeeCreate from './pages/EmployeeCreate';
import EmployeeDetails from './pages/EmployeeDetails';
import Employees from './pages/Employees';

import InvoiceCreate from './pages/InvoiceCreate';
import InvoiceDetails from './pages/InvoiceDetails';
import Invoices from './pages/Invoices';

import Jobs from './pages/Jobs';
import JobCreate from './pages/JobCreate';

import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/jobs',
    element: <LandingJobs />
  },
  {
    path: '/job-details',
    element: <LandingJobsDetails />
  },
  {
    path: '/new-job',
    element: <PostJob />
  },
  {
    path: '/auth',
    element: <Navigate to='/auth/login' />
  },
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Navigate to='/auth' />
      },
      {
        path: 'employees',
        element: <Employees />
      },
      {  
        path: 'employees/:id',
        element: <EmployeeDetails />
      },
      {  
        path: 'employees/create',
        element: <EmployeeCreate />
      },
      {
        path: 'invoices',
        element: <Invoices />
      },
      {
        path: 'invoices/:id',
        element: <InvoiceDetails />
      },
      {  
        path: 'invoices/create',
        element: <InvoiceCreate />
      },
      {
        path: 'jobs',
        element: <Jobs />
      },
      {
        path: 'jobs/create',
        element: <JobCreate />
      }
    ]
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
}

export default Router