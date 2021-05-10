import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.ul`
  color: red;
  bottom: 0;
`;

const Navigation = () => (
  <nav>
    <Footer>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </Footer>
  </nav>
);
export default Navigation;
