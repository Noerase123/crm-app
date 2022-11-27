import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SendIcon from '@mui/icons-material/Send';

export default function CustomCard() {
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
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DevOps Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{color: '#1976d2'}}>John Isaac Caasi</span> Lizards are a widespread group of squamate reptiles, with over 6,000
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
        <IconButton>
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
