import React from 'react';
import Typography from '@mui/material/Typography';
import {
  southAmPageDishes2,
  southAmPageDishes1,
  southAmPageDishes3,
  viewMoreAsia1,
  viewMoreAsia2,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function SouthAmerica() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          South America
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            South America tourism packages are designed covering the above
            mentioned haunts and activities. Some might even include additional
            destinations.
          </p>
          <p className="homeHeaderSubContent">
            South America is a large and geographically diverse continent
            situated in the southern part of the western hemisphere.
          </p>
          <p className="homeHeaderSubContent">
            South America tours can be easily planned with the sheer variety of
            choices available.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh6.googleusercontent.com/bu1OlhwmsekrL25I4tUA60yUJos6BDpMi7StWYomwAY14NUEJcRth93jWr3hWYrXtok=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh3.googleusercontent.com/FpvVHN2uRiPj937lG68ABgHBrixph7suEzPXT1HeHpSJMYLrgmd613H4f_NHVCccFTM=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Using the various suggestions offered, one can plan and enjoy a
            vacation to this fabulous continent with minimum hassles.
          </p>
          <p className="homeHeaderSubContent">
            The continent boasts of having one of the world’s highest peaks, the
            Andes, and one of the world’s longest rivers, the Amazon.
          </p>
          <p className="homeHeaderSubContent">
            South America is a continent entirely in the Western Hemisphere and
            mostly in the Southern Hemisphere, with a relatively small portion
            in the Northern Hemisphere at the northern tip of the continent.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from South America
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {southAmPageDishes1.map((val) => {
          return (
            <Blog
              continent="southAmerica"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {southAmPageDishes2.map((val) => {
          return (
            <Blog
              continent="southAmerica"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {southAmPageDishes3.map((val) => {
          return (
            <Blog
              continent="southAmerica"
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

export default SouthAmerica;
