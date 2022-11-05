import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
  background-color: skyblue;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      padding-top: 10px;
      padding-bottom: 10px;
      a {
        padding: 8px;
        text-decoration: none;
        color: #fff;
        text-transform: capitalize;
        cursor: pointer;
        letter-spacing: 1.1px;
        font-weight: lighter;
        transition: padding 0.3s linear;
      }

      a:hover {
        padding-top: 1.5rem;
      }
    }
  }

  /* mobile design */
  @media (max-width: 650px) {
    ul {
      display: ${(props) => (props.showMobileMenu ? 'block' : 'none')};
      li {
        a:hover {
          padding-left: 1.5rem;
        }
      }
    }
  }
`;

const Btn = styled.button`
  /* showing btn for smaller displays */
  @media (max-width: 650px) {
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background-color: transparent;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    display: block;
  }

  /* hiding btn for larger displays */
  @media (min-width: 651px) {
    display: none;
  }
`;

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
