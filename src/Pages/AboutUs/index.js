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
          "The world is a book and those who do not travel read only one page."
          - St. Augustine
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
            Number one places is small project started by us to enlighten people
            about the different destinations from different parts of the world.
          </p>
          <p className="homeHeaderSubContent">
            We all at Number one places share a huge interest in travelling
            ourselves and try new and different places to travel whenver we can
            find some time and new inspiration.
          </p>
          <p className="homeHeaderSubContent">
            Here you will find not just the places but also about their history
            and origin and the impact of these places on their culture and
            around the world.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh5.googleusercontent.com/KyMZ3QFtgVC3UhK9-R1iJYsStkGBlXLXr28_7ROlPcp37lV1DY089ERmNIAqYRbgyZ8=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly', marginBottom: '50px' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh5.googleusercontent.com/w9L5C3rOx0CAmVnstrtc3sEpVc4gdOk18b0R5ThG_L_LsJiHzT1QmIPBCXfEwunDZ6U=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            If you ask us about our favourite destination, then Europe and South
            America are something that stand out for us a lot, mainly becuase
            how history rich these places are.
          </p>
          <p className="homeHeaderSubContent">
            We are always open on discussions about travel and everything and if
            you would like to connect to us for anything, you can always drop a
            mail at help@numberoneplaces.com
          </p>
          <p className="homeHeaderSubContent">
            We hope you would find something to your interest here and keep
            coming back for more becuase we will keep on updating the content
            here whenever we can with new and interesting destinations.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
