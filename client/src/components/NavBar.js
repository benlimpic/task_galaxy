import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import '../App.css';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
    <Wrapper>
      <Logo >
        <Link to="/" onClick={() => {
          }}>Task Galaxy</Link>
      </Logo>
      <Nav>
        <Button variant="fill" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  color: goldenrod;
  margin: 0;
  line-height: 2;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
