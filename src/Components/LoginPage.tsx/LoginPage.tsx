import React from 'react';

import styles from './LoginPage.module.css';
import OAuthForm from '../OAuthForm/OAuthForm';
import LocalAuthForm from '../LocalAuthForm/LocalAuthForm';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <LocalAuthForm />

      <OAuthForm />
    </div>
  );
};

export default LoginPage;
