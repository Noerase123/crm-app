import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const CustomBreadcrumbs:React.FC<any> = ({ parent, child }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {parent}
        </Link>
        <Typography color="text.primary">
          {child}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

export default CustomBreadcrumbs