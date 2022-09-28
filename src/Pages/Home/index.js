import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import homeWide from '../../img/homwWide.jpeg';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextField from '@mui/material/TextField';
import BasicCard from '../../Components/BlogCard';
import { useNavigate } from 'react-router-dom';
import {
  homePageMeals1,
  homePageMeals2,
  homePageMeals3,
} from '../..//Constants/appConstants';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Home.css';

const styles = {
  textField: {
    width: '750px',
    marginBottom: '40px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '610px',
    },
  },
  contCardContent: {
    letterSpacing: '10px',
    color: 'white',
    fontSize: '30px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      letterSpacing: '4px',
      fontSize: '20px',
    },
  },
  smallText: {
    width: '350px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '290px',
    },
  },
  contactHomeSubHeader: {
    letterSpacing: '1px',
    marginBottom: '20px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '0.600rem',
    },
  },
};

AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-out-sine',
  delay: 100,
  mirror: true,
});

function Home() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetch(
  //     'https://karkhana-studio-backend.onrender.com/api/data?location=Asia&food=dimsum'
  //   ).then((response) => response.json());
  // }, []);

  const [formField, setFormField] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    message: '',
  });

  const navigate = useNavigate();

  const [responseFetched, setResponseFetched] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [responseStatus, setResponseStatus] = useState(0);
  const [emptyError, setEmptyError] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();

    setFormField((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      formField.first_name === '' ||
      formField.last_name === '' ||
      formField.message === '' ||
      formField.user_email === ''
    ) {
      setEmptyError(true);
      return;
    } else {
      setEmptyError(false);
    }
    setResponseFetched(true);
    sendEmailService();
  };

  useEffect(() => {
    if (responseStatus === 200) {
      setResponseFetched(false);
      setEmailConfirmed(true);
      setFormField({
        first_name: '',
        last_name: '',
        user_email: '',
        message: '',
      });
      setTimeout(() => {
        setEmailConfirmed(false);
      }, 3000);
    }
  }, [responseStatus]);

  const sendEmailService = async () => {
    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'service_4fuh61s',
            template_id: 'template_qn7p41u',
            user_id: 'CQNOp2_qYjDM7ax1L',
            template_params: {
              first_name: formField.first_name,
              last_name: formField.last_name,
              user_email: formField.user_email,
              message: formField.message,
            },
          }),
        }
      );
      const json = await response.json();
      return { json };
    } catch (err) {
      setResponseStatus(200);
      throw err;
    }
  };

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <div className="homeWrapper">
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/wmFoBcNRxmR07WyFmY1XwJjEedjXyjVYuT3eTt2rDopLcajhfGVA1QdAjJaXmsgH1m4=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh3.googleusercontent.com/v-DDe4FeEihYwTJqLZcIdDetHVkrKGpt_PvoE7A2F7yIsizq0V33OOsr7H4RplnuoeA=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh5.googleusercontent.com/IohzKUslKqrtBIdpORbUXgDm9nM0OdJMiPX8RXomHRlVuqXIJ8G3MtVAxWTcDHf3h2o=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/2pb5iP9qRuqTiZ23DEAO-_QZgBXbBmkmhad1cXM2D04T2Bd7FLjgDmwGdlGk1yguf3M=w2400"
            alt="foodImage"
          />
        </div>
        <div className="homeWrapper">
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/jo5cQ5NCElbQzzT8XIgcdHdkKTzAQ_og7Mu9KuGcApVWUE0mbwpIDb5CgiDrfX__BjI=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/H-PxZ0afFzoLgqeOfaKhNDtvOS3q90_bOl0_KOhO6VUQNfdaEbqvvb_q2ELHSHox4ZI=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/-MdQT1oB9cVJG6_bL93BCIU1EtLsX-GAVsWRckZeW7alPVemj1k5sbSntfVk76imSAw=w2400"
            alt="foodImage"
          />
          <LazyLoadImage
            className="carImages"
            effect="blur"
            src="https://lh6.googleusercontent.com/R7Okm7jV7LEwlbdmFdmPjDr_ez3hDRIAflFUgrf3WESn_Fv08NFEApenpxbp7RoMa_c=w2400"
            alt="foodImage"
          />
        </div>
      </div>
      <div className="homeContinent">
        <Typography sx={{ letterSpacing: '10px' }} variant="h4" gutterBottom>
          A quick word
        </Typography>
      </div>
      <div className="homeHeaderWrapper">
        <div className="homeHeaderContent">
          <p className="homeHeaderSubContent">
            These blogs are for anyone who loves to travel and wants to explore
            the world.
          </p>
          <p className="homeHeaderSubContent">
            Here you'll find a collection of some of the most iconic places on
            Earth and the rich history associated with them.
          </p>
          <p className="homeHeaderSubContent">
            Each ancient place has a story to tell, and you will learn about the
            origins of some of these places and how they have stood the test of
            time.
          </p>
          <p className="homeHeaderSubContent">
            pack your bagpacks and be ready on a journey down the explorer lane
            and let's travel to some of the most iconic places ever.
          </p>
          <Button
            onClick={() => navigate('/about')}
            sx={{ marginTop: '50px' }}
            variant="outlined"
          >
            Learn more about us --&gt;
          </Button>
        </div>
        <div>
          <LazyLoadImage
            effect="blur"
            className="homeHeaderImg"
            src="https://lh6.googleusercontent.com/kiqMDjpAFGpAy0uPrgjxYFxGX3rtcsGxyzAonv2Tk3q6j5geqbddaTSONaBgX5cv4O4=w2400"
            alt="homeHeaderImg"
          />
        </div>
      </div>
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '100px' }}
          variant="h4"
          gutterBottom
        >
          Best places from around the world
        </Typography>
      </div>
      <div data-aos="fade-right" className="continentsWrapper">
        <div className="contImg">
          <a href="/asia">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src="https://lh4.googleusercontent.com/p5cfedlCmkIsSfr0efzr6V9nTOfjBI_-WZOJzUUEnegGwIOYKOHBvS0On1fCxuISl-4=w2400"
              alt="foodImage"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Asia
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; Asia is a continent so full of intrigue, adventure,
                solace and spirituality.
              </p>
              <p className="content-list">
                &#x2022; There are 48 countries in Asia today, according to the
                United Nations with around 5 billion population.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/north-america">
            <div className="content-overlay"></div>

            <img
              className="contImages"
              src="https://lh6.googleusercontent.com/fyjsdXqdLJzh4fZz_k3KpZjMLSEqLER3LvH9HqfUCwAi4cbNY9uVhiiu2N7gnzGT_98=w2400"
              alt="foodImage"
            />
            <div className="middle" style={{ left: '40%' }}>
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                North America
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; The heart of North America beats through towering
                forests, undulating fields, high-plain deserts, pulsating
                metropolises and offbeat oases.
              </p>
              <p className="content-list">
                &#x2022;There are 23 countries in North America with a
                population of 300 million.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/africa">
            <div className="content-overlay"></div>

            <img
              className="contImages"
              src="https://lh4.googleusercontent.com/tqYuFvoVt81j6dCopiRDIwlJbmHV1jlCBA4soYXjJWPbWC0EG_MbqmaP-FmrS2DFk3s=w2400"
              alt="foodImage"
              loading="lazy"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Africa
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; Africa. There's nowhere like it on the planet for
                wildlife, wild lands and rich traditions that endure. Prepare to
                fall in love.
              </p>
              <p className="content-list">
                &#x2022; There are 54 countries in North America with a
                population of 1.3 billion
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="continentsWrapper"
        style={{ marginBottom: '100px' }}
      >
        <div className="contImg">
          <a href="/south-america">
            <div className="content-overlay"></div>

            <img
              className="contImages"
              src="https://lh6.googleusercontent.com/8J7VWcaoE9grpWlSUWTppwOvckyaVXhupzF3AFS8Z78BRWXsec58ei0e_KC_YTEurQ8=w2400"
              alt="foodImage"
            />
            <div className="middle" style={{ left: '35%' }}>
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                South America
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; Andean peaks, Amazonian rainforest, Patagonian
                glaciers, Incan ruins, white-sand beaches and vertiginous
                nightlife: the wonders of South America.
              </p>
              <p className="content-list">
                &#x2022; There are 12 countries in North America with a
                population of 400 million.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
        <div className="contImg">
          <a href="/europe">
            <div className="content-overlay"></div>
            <img
              className="contImages"
              src="https://lh5.googleusercontent.com/dAr1o37htgi9Y4GE1uPL3Arat56hobiNqsaQJrwyGvpRuHC-uc1pA2KcSJ92BjjxTGQ=w2400"
              alt="foodImage"
            />
            <div className="middle">
              <Typography sx={styles.contCardContent} variant="h5" gutterBottom>
                Europe
              </Typography>
            </div>
            <div className="content-details fadeIn-bottom">
              <p className="content-list">
                &#x2022; There simply is no way to tour Europe and not be
                awestruck by its natural beauty, epic history and dazzling
                artistic and culinary diversity.
              </p>
              <p className="content-list">
                &#x2022; There are 44 countries in North America with a
                population of 500 million.
              </p>
              <Button
                sx={{ color: 'white', marginTop: '20px' }}
                variant="contained"
              >
                Learn More --&gt;
              </Button>
            </div>
          </a>
        </div>
      </div>
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '100px' }}
          variant="h4"
          gutterBottom
        >
          Famous Destinations From Around The World
        </Typography>
      </div>
      <div className="topDishesHome">
        {homePageMeals1.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
                url={val.url}
              />
            </div>
          );
        })}
      </div>
      <div className="topDishesHome">
        {homePageMeals2.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
                url={val.url}
              />
            </div>
          );
        })}
      </div>
      <div className="topDishesHome">
        {homePageMeals3.map((val) => {
          return (
            <div data-aos={`fade-${val.fade}`}>
              <BasicCard
                name={val.name}
                para={val.para}
                time={val.time}
                origin={val.origin}
                img={val.img}
                url={val.url}
              />
            </div>
          );
        })}
      </div>

      <img className="vegetablesImg" src={homeWide} alt="homeWide" />
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '50px' }}
          variant="h4"
          gutterBottom
        >
          Contact Us
        </Typography>
      </div>
      <div className="contactHome">
        <div className="contactDetails">
          <Typography
            sx={styles.contactHomeSubHeader}
            variant="subtitle2"
            gutterBottom
          >
            We value any comments or feedback, so if you would like to get in
            touch with us we would love to hear from you.
          </Typography>
          <div className="contentFields">
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="First Name"
              name="first_name"
              variant="outlined"
              value={formField.first_name}
              onChange={onChangeHandler}
            />
            <TextField
              sx={{ width: '350px' }}
              id="outlined-basic"
              label="Last Name"
              name="last_name"
              variant="outlined"
              value={formField.last_name}
              onChange={onChangeHandler}
            />
          </div>

          <TextField
            sx={styles.textField}
            id="outlined-basic"
            label="Email Address"
            name="user_email"
            variant="outlined"
            value={formField.user_email}
            onChange={onChangeHandler}
          />

          <TextField
            sx={styles.textField}
            id="outlined-basic"
            label="Message"
            name="message"
            variant="outlined"
            value={formField.message}
            onChange={onChangeHandler}
            multiline
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '92%',
            }}
          >
            {responseFetched && (
              <div className="circularProgressContact">
                <CircularProgress size={100} color="success" />
              </div>
            )}
            <Button onClick={onSubmitHandler} type="submit" variant="outlined">
              Send Now
            </Button>
            {emailConfirmed && (
              <Alert sx={{ marginLeft: '50px' }} severity="success">
                Your message has been successfully sent. We'll get back to you
                shortly.
              </Alert>
            )}
            {emptyError && (
              <Alert sx={{ marginLeft: '50px' }} severity="error">
                Please enter all fields before sending your message
              </Alert>
            )}
          </div>
        </div>
        <LazyLoadImage
          effect="blur"
          className="contactHomeImg"
          src="https://lh3.googleusercontent.com/UFjuoIeK-TImF37vp-IXA8Byi9rrkLqCm5cKkZVURaChL47NpYl_zfFiFZNeBFzOb2U=w2400"
          alt="contactHomeImg"
        />
      </div>
    </>
  );
}

export default Home;
