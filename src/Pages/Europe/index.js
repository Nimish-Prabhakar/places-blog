import React from 'react';
import Typography from '@mui/material/Typography';
import {
  europePageDishes1,
  europePageDishes2,
  viewMoreAsia3,
  viewMoreAsia4,
} from '../../Constants/appConstants';
import ViewMoreCard from '../../Components/viewMoreCard';
import Blog from '../../Components/Blog';

function Europe() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h3" gutterBottom>
          European Cuisine
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            European cuisine (also called "Western cuisine") refers collectively
            to the cuisines of Europe and other Western countries.
          </p>
          <p className="homeHeaderSubContent">
            Northern European cuisines are characterized by robust dishes, often
            rich in fat. There are soups and stews, rich and robust dishes to
            fight the cold.
          </p>
          <p className="homeHeaderSubContent">
            The European cuisine includes a wide use of meat ranging from
            poultry to cattle, sheep, pork and varied game.
          </p>
        </div>
        <img
          className="contHeaderImg"
          src="https://lh4.googleusercontent.com/sA0nFwXSpx0e5-1nXTKUxDmAsGVps-t9j6BAe_ImFsoOSJGTNmCRXjwUyt9v-Gb5sGA=w2400"
          alt="contHeaderImg"
        />
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <img
          className="contHeaderImg"
          src="https://lh5.googleusercontent.com/N0i8fZGfTTPQsYhuZOZxHjP83U2wnnYrVtMLp8tHk_c4fobQHZJUNwnFhbq3XXyWhu4=w2400"
          alt="contHeaderImg"
        />
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            The European cuisine subdivision is not clear, as is the
            geographical subdivision. Turkey is normally recognized as a country
            that is part of the Middle East by position and type of cuisine, but
            a part of it belongs to European territories, as well as Russia
          </p>
          <p className="homeHeaderSubContent">
            In coastal areas, all kinds of fish are present because the European
            coasts are bathed by the main oceans and inland seas. There are
            several products derived from wheat and rye.
          </p>
          <p className="homeHeaderSubContent">
            There are many varieties of bread and each country has developed its
            own recipes and cooking methods. In Italy there is pasta. Rice,
            however cultivated is less used than potatoes, has become a staple
            food especially in the northernmost countries after being imported
            from the Americas.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous cuisines from the subcontinent of Asia
        </Typography>
      </div>
      <div className="continentPageCardsFlex">
        {europePageDishes1.map((val) => {
          return (
            <Blog
              continent="europe"
              name={val.name}
              img={val.img}
              subHeader={val.subHeader}
            />
          );
        })}
      </div>
      <div className="continentPageCardsFlex">
        {europePageDishes2.map((val) => {
          return (
            <Blog
              continent="europe"
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

export default Europe;
