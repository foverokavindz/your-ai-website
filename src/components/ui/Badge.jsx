import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    purple: 'bg-purple-100 text-purple-800',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {Icon && <Icon className="w-4 h-4 mr-1.5" />}
      {children}
    </span>
  );
};

export default Badge;
