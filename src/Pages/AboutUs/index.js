import { Typography } from '@mui/material';
import React from 'react';

function AboutUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3">
          About Us
        </Typography>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          "Cuisine is only about making foods taste the way they are supposed to
          taste." - Charlie Trotter
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            This website is a property of Premium Facility Management, located
            at North West Delhi in India.
          </p>
          <p className="homeHeaderSubContent">
            Number one meals is small project started by us to enlighten people
            about the different cuisines from different parts of the world.
          </p>
          <p className="homeHeaderSubContent">
            We all at Number one meals share a huge interest in cooking
            ourselves and try new and different things to cook whenver we can
            find some time and new inspiration.
          </p>
          <p className="homeHeaderSubContent">
            Here you will find not just the meals but also about their history
            and origin and the impact of these dishes on their culture and
            around the world.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh3.googleusercontent.com/fJEamQi5OVOZGLfcmirndfk5UvKE6dmPa_ZmWG5EDJQORF-ynCiYBX4fH04cLHLek-A=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly', marginBottom: '50px' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh6.googleusercontent.com/ncnDuIuMDGH5LF9fo-QtJXW7Np8e9ZTnxV1MvJddP_GSqC_H682LMb3eCxYI9WynhqY=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            If you ask us about our favourite meal, then steak and buffalo wings
            are something that stand out for us a lot, mainly becuase how juicy
            and delicate they are, maybe.
          </p>
          <p className="homeHeaderSubContent">
            We are always open on discussions about cooking and everything and
            if you would like to connect to us for anything, you can always drop
            a mail at nimish.prabhakar@numberonemeals.com
          </p>
          <p className="homeHeaderSubContent">
            We hope you would find something to your interest here and keep
            coming back for more becuase we will keep on updating the content
            here whenever we can with new and interesting dishes.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
