import React, { useState } from 'react';

import styles from './OAuthForm.module.css';

import google from '../../assets/googleLogo.png';
import github from '../../assets/githubLogoBlack.png';
import twitter from '../../assets/twitterLogo.png';
import CustomButton from '../CustomButton/CustomButton';

const OAuthForm = () => {
  const [whiteLogo, setWhiteLogo] = useState(false);

  const googleLogin = () => {
    window.open('https://auth-testing-renzik.herokuapp.com/auth/google', '_self');
  };

  const githubLogin = () => {
    window.open('https://auth-testing-renzik.herokuapp.com/auth/github', '_self');
  };
  const twitterLogin = () => {
    window.location.href = 'https://auth-testing-renzik.herokuapp.com/auth/twitter';
  };

  return (
    <div className={styles.OAuthContainer}>
      <CustomButton imageUrl={google} name='Google' onClick={googleLogin}>
        Sign in with Google
      </CustomButton>
      <CustomButton imageUrl={github} name='Github' onClick={githubLogin}>
        Sign in with Github
      </CustomButton>
      <CustomButton imageUrl={twitter} name='Twitter' onClick={twitterLogin}>
        Sign in with Twitter
      </CustomButton>
    </div>
  );
};

export default OAuthForm;
