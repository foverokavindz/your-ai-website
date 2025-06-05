import React from 'react';

const Section = ({
  children,
  id,
  className = '',
  background = 'default',
  padding = 'default',
}) => {
  const backgrounds = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  };

  const paddings = {
    sm: 'py-12',
    default: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-28',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
