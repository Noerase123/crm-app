import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import AppLayout from './components/AppLayout';

import EmployeeCreate from './pages/EmployeeCreate';
import EmployeeDetails from './pages/EmployeeDetails';
import Employees from './pages/Employees';

import InvoiceCreate from './pages/InvoiceCreate';
import InvoiceDetails from './pages/InvoiceDetails';
import Invoices from './pages/Invoices';

import Jobs from './pages/Jobs';
import JobCreate from './pages/JobCreate';

const Login:React.FC = () => {
  return (
    <div>
      <p>Login Page</p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/dashboard/employees' />
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
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
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
}

export default Router