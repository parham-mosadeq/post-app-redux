import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';
// styles
import { Btn, Nav } from '../../../styles/styles';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Nav showMobileMenu={mobileMenu}>
        <ul>
          <li>
            <Link to='/posts'>read posts</Link>
          </li>
          <li>
            <Link to='/write'>write posts</Link>
          </li>
        </ul>
      </Nav>
      <Btn onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? 'X' : 'O'}
      </Btn>
    </>
  );
};

export default Navbar;
