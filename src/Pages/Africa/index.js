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
          African Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            The roots of African cuisine goes back thousands of years to the
            Bronze Age in Northeast Africa, when early civilisations began
            cultivating grains such as barley and wheat.
          </p>
          <p className="homeHeaderSubContent">
            Traditionally, the various cuisines of Africa use a combination of
            plant and seed based, and do not usually have food imported.
          </p>
          <p className="homeHeaderSubContent">
            In some parts of the continent, the traditional diet features an
            abundance of root tuber products
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
            Central Africa, East Africa, North Africa, Southern Africa and West
            Africa each have distinctive dishes, preparation techniques, and
            consumption mores.
          </p>
          <p className="homeHeaderSubContent">
            The influence of African foodways on Caribbean, Brazilian and
            American Lowcountry cuisine, and Cajun cuisine from Louisiana is
            seen in rice dishes and green stews like the Afro-Caribbean efo,
            duckanoo and calaloo.
          </p>
          <p className="homeHeaderSubContent">
            With their distinctive taste and features African cuisine has maade
            its way acroos the world and now is famous among many big
            restaurants.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from the subcontinent of Africa
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
