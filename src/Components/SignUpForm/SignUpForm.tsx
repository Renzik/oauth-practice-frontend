import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import axios from 'axios';

const SignUpForm = ({ onSuccessfulSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api/users/register'
      : 'https://auth-testing-renzik.herokuapp.com/api/users/register';

  const handleSubmit = async () => {
    try {
      const { data }: { data: boolean } = await axios.post(
        URL,
        {
          email,
          password,
          username,
        },
        { withCredentials: true }
      );

      if (data) {
        onSuccessfulSignUp('end');
        // window.location.href = '/login';
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
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
          name='username'
          type='username'
          value={username}
          handleChange={e => setUsername(e.target.value)}
          label='Username'
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

export default SignUpForm;
