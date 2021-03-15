import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import OAuthForm from '../../OAuthForm/OAuthForm';
import LocalAuthForm from '../../LocalAuthForm/LocalAuthForm';
import CustomButton from '../../CustomButton/CustomButton';
import { SignInContainer, Title, SubTitle, Div } from './SignIn.styles';
import mailImage from '../../../assets/mail.png';
import { AiOutlineLeft } from 'react-icons/ai';

const SignInPage = () => {
  const [pageLocation, setPageLocation] = useState('start');

  const navigate = location => {
    setPageLocation(location);
  };

  return (
    <>
      {pageLocation === 'start' && (
        <SignInContainer>
          <Title className='start-title'>Welcome Back.</Title>
          <OAuthForm />
          <CustomButton
            imageUrl={mailImage}
            name='email'
            onClick={() => setPageLocation('signInWithEmail')}>
            Sign in with email
          </CustomButton>

          <SubTitle className='start-subTitle'>
            No Account? <Link to='/register'>Sign Up</Link>
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
          <LocalAuthForm />
          <SubTitle className='signInWithEmail-subTitle'>
            <button className='backToLoginOptionsButton' onClick={() => setPageLocation('start')}>
              <AiOutlineLeft /> All sign in options
            </button>
          </SubTitle>
        </SignInContainer>
      )}
    </>
  );
};

export default SignInPage;
