import React from 'react';
import { Route } from 'react-router';

import LocalAuthForm from '../../LocalAuthForm/LocalAuthForm';
import CustomButton from '../../OAuthButton/OAuthButton';
import OAuthForm from '../../OAuthForm/OAuthForm';
import { SignUpContainer } from './SignUp.styles';
import mailImage from '../../../assets/mail.png';

const SignUp = () => {
  const signUpWithEmail = () => {
    return <Route component={LocalAuthForm} />;
  };

  return (
    <SignUpContainer>
      <h1>Join Ntornos.</h1>
      {/* <LocalAuthForm /> */}

      <OAuthForm />
      <CustomButton imageUrl={mailImage} name='email' onClick={signUpWithEmail}>
        Sign Up email
      </CustomButton>
    </SignUpContainer>
  );
};

export default SignUp;
