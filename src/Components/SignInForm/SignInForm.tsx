import React, { useState } from 'react';

import styles from './SignInForm.module.css';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(process.env.NODE_ENV);

  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api/users/login'
      : 'https://auth-testing-renzik.herokuapp.com/api/users/login';

  const handleSubmit = async () => {
    const { data }: { data: boolean } = await axios.post(
      URL,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    if (data) {
      setEmail('');
      setPassword('');
    }
    if (data) {
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={e => setEmail(e.target.value)}
          label='Email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={e => setPassword(e.target.value)}
          label='Password'
          required
        />

        <CustomButton onClick={handleSubmit}>Continue</CustomButton>
      </form>
    </div>
  );
};

export default SignInForm;
