import React from 'react';
// router
import { Link } from 'react-router-dom';

const Navbar = () => {

  return <nav>
    <ul>
      <li>
        <Link to='/posts'>read posts</Link>
      </li>
      <li>
        <Link to='/write'>write posts</Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
