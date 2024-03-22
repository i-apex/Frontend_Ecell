import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import EventPhoto from '../Assets/Event.png';

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='Event'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={EventPhoto}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Event Date
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Register
        </Button>
        <Button size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}