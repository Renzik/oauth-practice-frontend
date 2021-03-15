import React, { useState } from 'react';

import OAuthForm from '../../OAuthForm/OAuthForm';
import SignInForm from '../../SignInForm/SignInForm';
import CustomButton from '../../CustomButton/CustomButton';
import { SignInContainer, Title, SubTitle, Div, SignInOutLink, Button } from './SignIn.styles';
import mailImage from '../../../assets/mail.png';
import { AiOutlineLeft } from 'react-icons/ai';

const SignInPage = () => {
  const [pageLocation, setPageLocation] = useState('start');

  return (
    <>
      {pageLocation === 'start' && (
        <SignInContainer>
          <Title className='start-title'>Welcome Back.</Title>
          <OAuthForm>Sign In</OAuthForm>
          <CustomButton
            imageUrl={mailImage}
            name='email'
            onClick={() => setPageLocation('signInWithEmail')}>
            Sign in with email
          </CustomButton>

          <SubTitle>
            No Account? <SignInOutLink to='/register'>Sign Up</SignInOutLink>
          </SubTitle>
        </SignInContainer>
      )}

      {pageLocation === 'signInWithEmail' && (
        <SignInContainer>
          <Title className='signInWithEmail-title'>Sign in with email</Title>
          <Div className='emailSignInSubTitleContainer'>
            <SubTitle className='emailSignInSubTitle' spacing='bg'>
              Enter the email address associated with your account
            </SubTitle>
          </Div>
          <SignInForm />
          <SubTitle className='signInWithEmail-subTitle'>
            <Button className='backToLoginOptionsButton' onClick={() => setPageLocation('start')}>
              <AiOutlineLeft /> All sign in options
            </Button>
          </SubTitle>
        </SignInContainer>
      )}
    </>
  );
};

export default SignInPage;
