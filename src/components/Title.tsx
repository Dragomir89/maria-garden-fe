import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold underline">{title}</h1>;
};

export default Title;
