import React from 'react';
import classNames from 'classnames';
import './_pItem.scss';

const PItem = ({ children, variant, color, className, ...rest }) => {
  const classes = classNames(
    `${variant}`,
    `text-${color}`,
    className
  );
  console.log(classes)
  return (
    <p className={classes} {...rest}>
      {children}    
    </p>
  );
};

export default PItem;