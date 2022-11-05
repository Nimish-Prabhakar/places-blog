import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const styles = {
  textField: {
    width: '750px',
    marginBottom: '40px',
  },
};

function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formField, setFormField] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    message: '',
  });

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
      <div className="homeContinent">
        <Typography
          sx={{ letterSpacing: '10px', marginBottom: '50px' }}
          variant="h4"
          gutterBottom
        >
          Contact Us
        </Typography>
      </div>
      <div className="contactPageSubHeader">
        <Typography
          sx={{ letterSpacing: '1px', marginBottom: '20px' }}
          variant="subtitle2"
          gutterBottom
        >
          We are travel techies. We work across time zones, hemispheres,
          cultures and languages. We share a common interest of cooking and
          trying new dishes whenever we can.
        </Typography>
        <Typography
          sx={{ letterSpacing: '1px', marginBottom: '20px' }}
          variant="subtitle2"
          gutterBottom
        >
          Our dream is travel across the globe and visit many places, each
          country has to offer and make something out of them according to our
          own taste.
        </Typography>
        <div className="contactPageLocation">
          <IoLocationSharp
            style={{ color: 'red', fontSize: '25px', marginRight: '10px' }}
          />
          <p>
            PREMIUM FACILITY MANAGEMENT, GROUND FLOOR, PLOT NO-82, PKT-3,
            SECTOR-25, ROHINI, North West Delhi, Delhi, 110085
          </p>
        </div>
        <div className="contactPageLocation">
          <IoMail
            style={{ color: 'red', fontSize: '25px', marginRight: '10px' }}
          />
          <p>help@numberonemeals.com</p>
        </div>
      </div>
      <div className="contactHome">
        <div className="contactDetails">
          <Typography
            sx={{ letterSpacing: '1px', marginBottom: '20px' }}
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

        <img
          style={{ height: '600px' }}
          src="https://lh5.googleusercontent.com/rHP2gIVNlkkjBT3MQrqdPuu7gISYT2gXgu97MUCzEzXeryCsjTE42QwDPNGGW9hKj28=w2400"
          alt="contactImage"
        />
      </div>
    </>
  );
}

export default Contact;
