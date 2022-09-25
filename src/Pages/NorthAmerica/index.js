import React from 'react';
import Typography from '@mui/material/Typography';
import {
  naPageDishes1,
  naPageDishes2,
  naPageDishes3,
  viewMoreAsia1,
  viewMoreAsia2,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function NorthAmerica() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          North American Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            When we think of North American cuisine, we think of dishes that are
            exotic, delicious, and rich in flavors and spices.
          </p>
          <p className="homeHeaderSubContent">
            North American Cuisine includes foods native to or popular in
            countries of North America, such as Canadian cuisine, American
            cuisine, African American cuisine, Mexican cuisine.
          </p>
          <p className="homeHeaderSubContent">
            North American cuisines display influence from many international
            cuisines.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh5.googleusercontent.com/7XTygc17N0zxr-019ORu2N-Of1bNg_H0IwcG4ers0Kyvb0T5R3wxo_7_nubyUYxtGRE=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh6.googleusercontent.com/Wn932FjUDTV8ZV62woNvDCuAe3g09xjgsLeIsXtWOwdl3vCgU_wJCRa-EMjrZH8SRjA=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            North American cuisine first originated with the settlement of the
            North American continent.
          </p>
          <p className="homeHeaderSubContent">
            Amerindian populations cultivated the native plants and animals and
            over time created unique cooking techniques and dishes.
          </p>
          <p className="homeHeaderSubContent">
            Today North American cuisines have global origins and influences in
            addition to unique modern creations native to the region.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from North America
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes1.map((val) => {
          return (
            <Blog
              continent="northAmerica"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes2.map((val) => {
          return (
            <Blog
              continent="northAmerica"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {naPageDishes3.map((val) => {
          return (
            <Blog
              continent="northAmerica"
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

export default NorthAmerica;
