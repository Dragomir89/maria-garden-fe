import React from 'react';
import { MODE } from '../config';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  console.log(MODE);
  return (
    <>
      <h1>{title}</h1>
      <h2>{MODE}</h2>
    </>
  );
};

export default Title;
