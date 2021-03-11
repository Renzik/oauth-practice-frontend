import React, { useState } from 'react';

import styles from './LocalAuthForm.module.css';

import FormInput from '../FormInput/FormInput';

const LocalAuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <div className={styles.loginFormContainer}>
      <span className={styles.subTitle}>I already have an account</span>

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

        <button className={styles.button} type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LocalAuthForm;
