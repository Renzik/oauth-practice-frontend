import React, { useState } from 'react';

import styles from './SignInForm.module.css';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

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
