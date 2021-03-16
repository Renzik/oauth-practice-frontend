import React, { useState } from 'react';

import styles from './SignInForm.module.css';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const req = await axios.post(
        'http://localhost:4000/api/users/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
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
