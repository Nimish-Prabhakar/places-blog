import React, { useEffect, useState, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '@mui/material/Typography';
import Flag from 'react-world-flags';
import { viewMoreAsia1, viewMoreAsia2 } from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import CircularProgress from '@mui/material/CircularProgress';
import MetaTags from 'react-meta-tags';
import { useNavigate } from 'react-router-dom';

function SingleMealPage() {
  const [fetchedData, setFetchedData] = useState({ images: [] });
  const [responseFetched, setResponseFetched] = useState(false);
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    let dish = window.location.pathname.split('/').pop();
    let continent = window.location.pathname.split('/')[1];
    continent = continent.charAt(0).toUpperCase() + continent.slice(1);
    setCurrentUrl(continent + '/' + dish);
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

  useEffect(() => {
    if (window.innerWidth > 600) {
      setTimeout(() => {
        const adsArea = document.getElementById('ads-ref');
        const elements1 = document.querySelectorAll(`[data-item-id^="~~V1~~"]`);

        elements1.forEach((element) => {
          element.style.width = '15%';
        });
        adsArea.style.width = '1200px';
        adsArea.style.marginLeft = '50px';
      }, 3000);
    }
  }, [responseFetched]);

  const divRef = useRef();

  const htmlString = `
   <div id="taboola-below-article-thumbnails"></div>
    <script type="text/javascript">
      window._taboola = window._taboola || [];
      _taboola.push({
        mode: 'thumbnails-a',
        container: 'taboola-below-article-thumbnails',
        placement: 'Below Article Thumbnails',
        target_type: 'mix',
      });
    </script>
    <script type="text/javascript">
      window._taboola = window._taboola || [];
      _taboola.push({ flush: true });
    </script>
  `;

  useEffect(() => {
    const fragment = document
      .createRange()
      .createContextualFragment(htmlString);
    divRef.current.append(fragment);
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
          <MetaTags>
            <title>{fetchedData.name}</title>
            <meta property="og:title" content={fetchedData.name} />
            <meta property="og:image" content={fetchedData.images[0]} />
            <meta
              property="og:url"
              content={`https://numberoneplaces.com/${currentUrl}`}
            />
          </MetaTags>
          <div className="SingleMealPageImageCarousel">
            <Carousel
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
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
      <div id="ads-ref" ref={divRef}></div>
    </>
  );
}

export default SingleMealPage;
