import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import AppLayout from './components/AppLayout';
import EmployeeDetails from './pages/EmployeeDetails';

import Employees from './pages/Employees';
import InvoiceDetails from './pages/InvoiceDetails';
import Invoices from './pages/Invoices';

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
        path: 'invoices',
        element: <Invoices />
      },
      {
        path: 'invoices/:id',
        element: <InvoiceDetails />
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