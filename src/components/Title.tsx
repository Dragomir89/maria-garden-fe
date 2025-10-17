import React, { useEffect } from 'react';
import { MODE } from '../config';
import { getUsers } from '../requests';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  console.log(MODE);
  useEffect(() => {
    const users = async () => {
      const response = await getUsers();

      console.log(response);
    };
    users();
  }, []);
  return (
    <>
      <h1>{title}</h1>
      <h2>{MODE}</h2>
    </>
  );
};

export default Title;
