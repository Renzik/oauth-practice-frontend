import React, { useContext, useState } from 'react';

import styles from './SignInForm.module.css';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../../types/maintypes';
import { myContext } from '../Context';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const { data }: { data: AxiosResponse } = await axios.post(
      'http://localhost:4000/api/users/login',
      {
        username,
        password,
      },
      { withCredentials: true }
    );

    console.log(data);

    if (data) {
      setUsername('');
      setPassword('');
    }
  };

  const getUser = async () => {
    const { data }: { data: AxiosResponse } = await axios.get(
      'http://localhost:4000/api/users/me',
      { withCredentials: true }
    );

    console.log(data);
  };

  const userObj = useContext(myContext) as IUser;
  console.log(userObj);

  return (
    <div className={styles.loginFormContainer}>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='username'
          type='username'
          value={username}
          handleChange={e => setUsername(e.target.value)}
          label='username'
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
        <CustomButton onClick={getUser}>Get req.user</CustomButton>
      </form>
    </div>
  );
};

export default SignInForm;
