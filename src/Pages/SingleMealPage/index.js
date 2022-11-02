import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '@mui/material/Typography';
import Flag from 'react-world-flags';
import { viewMoreAsia1, viewMoreAsia2 } from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

function SingleMealPage() {
  const [fetchedData, setFetchedData] = useState({ images: [] });
  const [responseFetched, setResponseFetched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    let dish = window.location.pathname.split('/').pop();
    let continent = window.location.pathname.split('/')[1];
    continent = continent.charAt(0).toUpperCase() + continent.slice(1);
    fetch(
      `https://karkhana-studio-backend.onrender.com/api/data?location=${continent}&food=${dish}&source=Places`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          navigate('*');
        } else {
          setFetchedData(data);
        }
      })
      .then(() => setResponseFetched(true));
  }, []);

  return (
    <>
      {!responseFetched && (
        <div className="circularProgress">
          <CircularProgress size={100} color="success" />
        </div>
      )}
      {responseFetched && (
        <>
          <div className="SingleMealPageImageCarousel">
            <Carousel
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={true}
              width="50%"
            >
              {fetchedData.images.map((img) => {
                return (
                  <img
                    loading="lazy"
                    src={img}
                    alt="img"
                    style={{ maxHeight: '550px' }}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="SingleMealPageContentFlex">
            <div className="SingleMealPageContentHeader">
              <Typography sx={{ letterSpacing: '1px' }} variant="h3">
                {fetchedData.name}
              </Typography>
              <Flag style={{ height: '100px' }} code={fetchedData.code} />
            </div>
            {fetchedData.description.map((description) => {
              return (
                <Typography
                  sx={{ letterSpacing: '1px', marginTop: '25px' }}
                  variant="subtitle1"
                >
                  {description}
                </Typography>
              );
            })}
          </div>
          <hr className="SingleMealPageHr" />
          <div className="viewMore" style={{ marginBottom: '40px' }}>
            <Typography sx={{ letterSpacing: '5px' }} variant="h4" gutterBottom>
              View More
            </Typography>
            <hr />
          </div>
          <div className="viewMoreContent">
            {viewMoreAsia1.map((val) => {
              return (
                <ViewMoreCard
                  img={val.img}
                  header={val.header}
                  subHeader={val.subHeader}
                  url={val.url}
                />
              );
            })}
          </div>
          <div className="viewMoreContent">
            {viewMoreAsia2.map((val) => {
              return (
                <ViewMoreCard
                  img={val.img}
                  header={val.header}
                  subHeader={val.subHeader}
                  url={val.url}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default SingleMealPage;
