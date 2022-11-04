import React from 'react';
import Typography from '@mui/material/Typography';
import {
  africaPageDishes1,
  africaPageDishes2,
  viewMoreAsia3,
  viewMoreAsia4,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function Africa() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          Africa
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            The simmering sun sinks beneath the delicate stretch of a baobab
            tree as the first notes of the Lion King’s soundtrack play. It’s
            that iconic image that many of us carry as our first introduction to
            the massive and marvellous continent
          </p>
          <p className="homeHeaderSubContent">
            This is Africa – a continent so diverse, packed full of beautiful
            countries, backed by a rich heritage and tinged with a complex and
            painful past.
          </p>
          <p className="homeHeaderSubContent">
            The chance to explore its corners is a gift. Each slice of this
            content, each sliver is a revelation.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh4.googleusercontent.com/gde2h0YVizxF_r7hWmha1mp2mS6Gg-EaCeh59C01hnpx9xC-GEQZVB6YVKhU8BGb1oM=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh3.googleusercontent.com/9_LUE-gkfroRmfsyDu0R3zaIxnTePANITuy2bBxguMpB-D_1dy8ANPXDAXtn2U7j6QU=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Africa is one of the largest continents in the world, both in terms
            of people and land. The continent has 50 countries, several diverse
            landscapes, and countless tribes and ethnic groups.
          </p>
          <p className="homeHeaderSubContent">
            This makes it a prime tourist destination, with a myriad of local
            places for travel, which you will find explored in detail in this
            Africa travel guide. Let’s take a look at the highlights of Africa
            Tourism:
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous Places from the subcontinent of Africa
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {africaPageDishes1.map((val) => {
          return (
            <Blog
              continent="africa"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {africaPageDishes2.map((val) => {
          return (
            <Blog
              continent="africa"
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
        {viewMoreAsia3.map((val) => {
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
        {viewMoreAsia4.map((val) => {
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

export default Africa;
