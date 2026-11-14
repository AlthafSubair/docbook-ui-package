import React from 'react';

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className = '' }: TitleProps) => {
  return (
    <h1 className={`text-2xl md:text-3xl font-bold text-primary-dark ${className}`.trim()}>
      {children}
    </h1>
  );
};

export default Title;
