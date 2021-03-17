import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// creating the context, then we add data to it and we can access it globally around our front-end.
export const myContext = createContext({});

// App would be the props.children value.
const Context = (props: any) => {
  const [userObj, setUserObj] = useState<any>();

  const URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api/users/me'
      : 'https://auth-testing-renzik.herokuapp.com/api/users/me';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data }: { data: AxiosResponse } = await axios.get(URL, {
          // pass cookies from browser to server
          withCredentials: true,
        });

        if (data) setUserObj(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [URL]);

  return <myContext.Provider value={userObj}>{props.children}</myContext.Provider>;
};

export default Context;
