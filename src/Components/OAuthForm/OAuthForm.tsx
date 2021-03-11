import React, { useState } from 'react';

import styles from './OAuthForm.module.css';

import google from '../../assets/googleLogo.png';
import githubBlack from '../../assets/githubLogoBlack.png';
import githubWhite from '../../assets/githubLogoWhite.png';
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
        Google
      </CustomButton>
      <CustomButton
        toggleLogo={setWhiteLogo}
        imageUrl={whiteLogo ? githubWhite : githubBlack}
        name='Github'
        onClick={githubLogin}>
        Github
      </CustomButton>
      <CustomButton imageUrl={twitter} name='Twitter' onClick={twitterLogin}>
        Twitter
      </CustomButton>
    </div>
  );
};

export default OAuthForm;
