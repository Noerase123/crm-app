import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function JobCard() {
  return (
    <Card sx={{
      maxWidth: 500
    }}>
      <Box sx={{
        pt: 3,
        pl: 3,
        pr: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <CardMedia
          sx={{ backgroundColor: '#e1e1e1' }}
          component="img"
          height="140"
          width='140'
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="company logo"
        />
        <CardContent sx={{ pt: 0, px: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            DevOps Engineer
          </Typography>
          <Typography gutterBottom variant='subtitle1' component="div">
            Company XYZ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'end'
      }}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
