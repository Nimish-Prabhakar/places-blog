import React, { useEffect } from 'react';
import Logo from '../../img/logo.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function LinkTab(props) {
  const navigate = useNavigate();
  const link = props.link;
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(link);
      }}
      {...props}
    />
  );
}

const styles = {
  serachField: {
    width: '300px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '225px',
    },
  },
  navLinks: {
    fontSize: '20px',
    ['@media (max-width:1280px)']: {
      // eslint-disable-line no-useless-computed-key
      fontSize: '15px',
    },
  },
};

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const navigate = useNavigate();

  useEffect(() => {
    let currentTab = window.location.href;
    if (currentTab.includes('asia')) {
      setValue(1);
    } else if (
      currentTab.includes('north-america') ||
      currentTab.includes('northAmerica')
    ) {
      setValue(2);
    } else if (
      currentTab.includes('south-america') ||
      currentTab.includes('southAmerica')
    ) {
      setValue(3);
    } else if (currentTab.includes('africa')) {
      setValue(4);
    } else if (currentTab.includes('europe')) {
      setValue(5);
    } else if (currentTab.includes('about')) {
      setValue(6);
    } else if (currentTab.includes('contact')) {
      setValue(7);
    } else {
      setValue(0);
    }
  });

  return (
    <>
      <div className="navUpper">
        <img
          onClick={() => navigate('/')}
          className="logoImg"
          src={Logo}
          alt="logo"
        />
      </div>
      <div className="navLinks">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab sx={styles.navLinks} label="Home" link="/" />
          <LinkTab sx={styles.navLinks} label="Asia" link="/asia" />
          <LinkTab
            sx={styles.navLinks}
            label="North America"
            link="/north-america"
          />
          <LinkTab
            sx={styles.navLinks}
            label="South America"
            link="/south-america"
          />
          <LinkTab sx={styles.navLinks} label="Africa" link="/africa" />
          <LinkTab sx={styles.navLinks} label="Europe" link="/europe" />
          <LinkTab sx={styles.navLinks} label="About Us" link="/about" />
          <LinkTab sx={styles.navLinks} label="Contact" link="/contact" />
        </Tabs>
      </div>
    </>
  );
}

export default NavBar;
