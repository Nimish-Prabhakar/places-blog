import React from 'react';
import Typography from '@mui/material/Typography';
import {
  southAmPageDishes2,
  southAmPageDishes1,
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
          South American Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Products coming from the Amazon are characteristic of South American
            flavors, such as quinoa and thousands of sorts of potatoes.
          </p>
          <p className="homeHeaderSubContent">
            The Southern tip bordering the Pacific is known for seafood, notably
            dishes like ceviche or grilled fish.
          </p>
          <p className="homeHeaderSubContent">
            Is South American cuisine synonymous with hearty hand-rolled pasta
            dishes popular in Argentina or with the fresh lemon-cilantro flavor
            of Peruvian ceviche? Both are key but are based on an array of
            cultural and culinary influences
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
            Eastern European potato salad, Italian gnocchi, French croissants,
            and Spanish saffron-onion sauces are all part of today’s South
            American cooking.
          </p>
          <p className="homeHeaderSubContent">
            South American cuisine is a blend of indigenous, African, Spanish
            and Portuguese roots.
          </p>
          <p className="homeHeaderSubContent">
            All the different immigrants brought their customs and foods, which
            fused with the native cultures to create creole cuisine.
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
