import React, { useState } from 'react';

import { SignUpContainer } from './SignUp.styles';
import { SubTitle, SignInOutLink, Title, Div, Button } from '../sign-in/SignIn.styles';
import { AiOutlineLeft } from 'react-icons/ai';

import CustomButton from '../../CustomButton/CustomButton';
import OAuthForm from '../../OAuthForm/OAuthForm';
import mailImage from '../../../assets/mail.png';

const SignUp = () => {
  const [pageLocation, setPageLocation] = useState('start');

  return (
    <>
      {pageLocation === 'start' && (
        <SignUpContainer>
          <Title>Join Ntornos.</Title>

          <OAuthForm>Sign up</OAuthForm>
          <CustomButton
            imageUrl={mailImage}
            name='email'
            onClick={() => setPageLocation('signUpWithEmail')}>
            Sign up with email
          </CustomButton>
          <SubTitle>
            Have an account? <SignInOutLink to='/login'>Sign In</SignInOutLink>
          </SubTitle>
        </SignUpContainer>
      )}

      {pageLocation === 'signUpWithEmail' && (
        <SignUpContainer>
          <Title>Sign up with email</Title>
          <Div className='emailSignInSubTitleContainer'>
            <SubTitle>Enter your new account details</SubTitle>
          </Div>

          <SubTitle>
            <Button className='backToLoginOptionsButton' onClick={() => setPageLocation('start')}>
              <AiOutlineLeft /> All sign up options
            </Button>
          </SubTitle>
        </SignUpContainer>
      )}
    </>
  );
};

export default SignUp;
