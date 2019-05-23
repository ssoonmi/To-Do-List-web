import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 56px;
  align-items: center;

  .left, .right {
    height: 100%;
    display: flex;
    align-items: center;
  }

  li, a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

function NavBar() {
  return (
    <Nav>
      <ul className="left">
        <li>
          <Link to="/"><h1>Task Manager</h1></Link>
        </li>
      </ul>
      <ul className="right">
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </Nav>
  );
}

export default NavBar;