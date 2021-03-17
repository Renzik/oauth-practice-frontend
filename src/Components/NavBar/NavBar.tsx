import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import styles from './NavBar.module.css';

import { myContext } from '../Context';
import { IUser } from '../../types/maintypes';

const NavBar = () => {
  // getting our current user object present in App so that we can render routes depending if an user is logged in or not.
  const userObj = useContext(myContext) as IUser;

  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api/users/logout'
      : 'https://auth-testing-renzik.herokuapp.com/api/users/logout';

  const logout = async () => {
    const res: AxiosResponse = await axios.get(URL, {
      withCredentials: true,
    });
    if (res.data === 'done') {
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <h2>Logo</h2>
      <ul className={styles.navBar}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {userObj ? (
          <li onClick={logout}>Log out</li>
        ) : (
          <>
            <li>
              <Link to='/login'>Sign In</Link>
            </li>
            <li>
              <Link to='/register'>Try Free</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
