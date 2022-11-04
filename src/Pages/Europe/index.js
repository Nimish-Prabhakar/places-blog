import React from 'react';
import Typography from '@mui/material/Typography';
import {
  europePageDishes1,
  europePageDishes2,
  europePageDishes3,
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
          Europe
        </Typography>
      </div>
      <div
        className="homeHeaderWrapper"
        style={{ justifyContent: 'space-evenly' }}
      >
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            Say the word Europe. It’s the power of one name that evokes an
            explosion of art, history, beauty, culture, architecture, cuisine,
            romance, literature…everything you’d want in a vacation spot.
          </p>
          <p className="homeHeaderSubContent">
            Today, we want you to take a European tour with us – from the remote
            Faroe Islands in Denmark, to the Champs Elysees in France.
          </p>
          <p className="homeHeaderSubContent">
            Honestly, could anything we say prompt you to book your tickets?
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
            Tourism in Europe is a thriving industry with nearly 500 million
            travelers visiting here every year. From bohemian Prague to playful
            Paris and from lively Lisbon to eternal Rome, Europe has some of the
            best travel destinations in the world.
          </p>
          <p className="homeHeaderSubContent">
            o make the most of their excursion to Europe, travelers are supposed
            to abide by a general rule: let one’s heart be the guide instead of
            a Europe travel guide.
          </p>
          <p className="homeHeaderSubContent">
            The culture of Europe is a fine example that full potential of human
            faculties transcends beyond geographic or linguistic bounds. Europe
            is more than just another destination; it’s a temptation that no
            ardent traveler can ignore.
          </p>
        </div>
      </div>
      <div className="homeContinent" style={{ marginBottom: '40px' }}>
        <Typography sx={{ letterSpacing: '5px' }} variant="h5" gutterBottom>
          Some of the most famous Places from the subcontinent of Europe
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
      <div className="continentPageCardsFlex">
        {europePageDishes3.map((val) => {
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
