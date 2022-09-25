import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ViewMoreCard({ img, header, subHeader, url }) {
  return (
    <a href={url} style={{ textDecoration: 'none' }}>
      <Card sx={{ display: 'flex', maxWidth: '500px' }}>
        <CardMedia
          component="img"
          sx={{ width: '250px' }}
          image={img}
          alt={subHeader}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            width: '250px',
          }}
        >
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h7">
              {header}
            </Typography>
            <Typography component="div" variant="h5">
              {subHeader}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </a>
  );
}

export default ViewMoreCard;
