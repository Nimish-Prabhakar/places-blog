import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function BasicCard({ img, name, time, origin, para, url }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: '300px',
        marginBottom: '100px',
        backgroundColor: '#f8f7f7',
        borderRadius: '15px',
      }}
      raised={true}
    >
      <CardMedia component="img" alt="green iguana" height="180" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          • Country : {origin}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          • Best Time to Visit : {time}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {para}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: '-10px', marginLeft: '10px' }}>
        <Button onClick={() => navigate(`/${url}`)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
