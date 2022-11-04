import React from 'react';
import Typography from '@mui/material/Typography';
import {
  asianPageDishes1,
  asianPageDishes2,
  asianPageDishes3,
  viewMoreAsia1,
  viewMoreAsia2,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Blog from '../../Components/Blog';

function Asia() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          Asia
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Tourism in Asia is growing faster than anywhere else in the world,
            driven by the increasing wealth of countries like Taiwan, South
            Korea and Malaysia, and by the huge populations of China, India and
            Indonesia.
          </p>
          <p className="homeHeaderSubContent">
            Asian Tourism is a unique book and the first to addresses this
            imbalance by providing a high quality edited collection of chapters
            which explore the domestic and intraregional tourism in Asia.
          </p>
          <p className="homeHeaderSubContent">
            The land of hidden gems, unexplored grasslands, temple towns,
            bustling streets and golden beaches; this is Asia Tourism for you.
          </p>
        </div>
        <LazyLoadImage
          effect="blur"
          className="contHeaderImg"
          src="https://lh3.googleusercontent.com/hynhyzDX7XY0h1wMFf98mq01NzIdG75VF9UiZk0JWRTltuum4Fw9qRenxOGkbD0W7f0=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <LazyLoadImage
          effect="blur"
          className="contHeaderImg"
          src="https://lh4.googleusercontent.com/JzoGKfnwUQf3RpWSwhR2Iloya9x1KFDL9F03WfMvfsAu4avt0pQ2AhtIrZo2Dy4XeP8=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            From lip smacking spicy curries that will wake you up to the comfort
            of hot, bite-sized momos; Asia will fill not just your stomach but
            your heart too.
          </p>
          <p className="homeHeaderSubContent">
            Get ready to taste the many cultures of this land as you explore
            this vast continent and its many flavours. We assure you that there
            will never be a dull moment when you are in Asia!
          </p>
          <p className="homeHeaderSubContent">
            Many Asian countries such as India, China and Japan are reputed
            world over for their rich history, variety of cultures and
            traditions. Here are some of Asia’s famous places that you must
            visit if you wish to witness the remnants of some of them:
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous places from the subcontinent of Asia
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes1.map((val) => {
          return (
            <Blog
              continent="asia"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes2.map((val) => {
          return (
            <Blog
              continent="asia"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {asianPageDishes3.map((val) => {
          return (
            <Blog
              continent="asia"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
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
  );
}

export default Asia;
