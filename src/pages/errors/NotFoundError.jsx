import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundError = (props) => {
  return (
    <div>
      <h2>NotFoundError</h2>
      <p>{props.error}</p>
      <Link to={'/'}>Return home</Link>
    </div>
  );
};

export default NotFoundError;
