import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Error404() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="errorWrapper">
      <img
        src="https://lh5.googleusercontent.com/rdbexiXCOF02YCe0BaSz4S0I38dDz_uVxW5gWsmZQ3LA1Q0PwTXCcAmDLA0bTZxk9Iw=w2400"
        alt="error404"
        style={{ height: '45vh' }}
      />
      <Typography
        sx={{ letterSpacing: '5px', marginBottom: '25px' }}
        variant="h5"
        gutterBottom
      >
        AWWWW.....DON'T CRY
      </Typography>
      <Typography
        sx={{ letterSpacing: '2px', marginBottom: '25px' }}
        variant="subtitle1"
        gutterBottom
      >
        I guess right now we don't have the meal you are looking for, but please
        come back again in the future and check again.
      </Typography>
      <Button
        sx={{ marginBottom: '50px' }}
        onClick={() => navigate('/')}
        variant="outlined"
      >
        Go back to homepage
      </Button>
    </div>
  );
}

export default Error404;
