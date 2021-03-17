import React, { useState } from 'react';

import { SubTitle, SignInOutLink, Title, Div, Button } from '../sign-in/SignIn.styles';
import { AiOutlineLeft } from 'react-icons/ai';

import CustomButton from '../../CustomButton/CustomButton';
import OAuthForm from '../../OAuthForm/OAuthForm';
import mailImage from '../../../assets/mail.png';
import SignUpForm from '../../SignUpForm/SignUpForm';
import Card from '../../Card/Card';

const SignUp = () => {
  const [pageLocation, setPageLocation] = useState('start');

  return (
    <>
      {pageLocation === 'start' && (
        <Card>
          <Title>Join Ntornos.</Title>
          <div>
            <OAuthForm>Sign up</OAuthForm>
            <CustomButton
              imageUrl={mailImage}
              name='email'
              onClick={() => setPageLocation('signUpWithEmail')}>
              Sign up with email
            </CustomButton>
          </div>
          <SubTitle>
            Have an account? <SignInOutLink to='/login'>Sign In</SignInOutLink>
          </SubTitle>
        </Card>
      )}

      {pageLocation === 'signUpWithEmail' && (
        <Card>
          <Title>Sign up with email</Title>
          <Div className='emailSignInSubTitleContainer'>
            <SubTitle>Enter your new account details</SubTitle>
          </Div>

          <SignUpForm onSuccessfulSignUp={setPageLocation} />

          <SubTitle>
            <Button className='backToLoginOptionsButton' onClick={() => setPageLocation('start')}>
              <AiOutlineLeft /> All sign up options
            </Button>
          </SubTitle>
        </Card>
      )}

      {pageLocation === 'end' && (
        <Card>
          <Title>Welcome to Ntornos.</Title>
          <Div className='emailSignInSubTitleContainer'>
            <SubTitle>Sign up successful</SubTitle>
          </Div>
          <Div className='proceedToLogin'>
            <CustomButton onClick={() => (window.location.href = '/login')}>
              Proceed to login
            </CustomButton>
          </Div>
        </Card>
      )}
    </>
  );
};

export default SignUp;
