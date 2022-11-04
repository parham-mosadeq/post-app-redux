import React from 'react';
// router
import { Link } from 'react-router-dom';
const Notfound = () => {
  return (
    <div>
      404 notfound
      <div>
        <Link to='/'>home</Link>
        <Link to='/posts'>posts</Link>
      </div>
    </div>
  );
};

export default Notfound;
