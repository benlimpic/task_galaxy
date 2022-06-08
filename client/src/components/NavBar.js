import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import '../App.css';
import { FaGhost, FaPlus } from "react-icons/fa";




function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const [isShow, setIsShow] = React.useState(false);
  const [isMinus, setIsMinus] = React.useState(false);

  return (
    <div className="navbar">
    <Wrapper>
      <Logo >
        <Link to="/" onClick={() => {
          setIsMinus(false) 
          setIsShow(false)}}>Task Galaxy</Link>
      </Logo>
      <Nav>
        {isShow ? <Button onClick={() => setIsShow(!isShow)} as={Link} to='/create-project' >New Project</Button> : null}
        {isShow ? <Button as={Link} to='/create' onClick={() => setIsShow(!isShow)} >New Task</Button> : null}
        {!isMinus ? <Button onClick={() => {
          setIsMinus(!isMinus)
          setIsShow(false)}}>

            <FaGhost icon="flipper" size="1.5em" className="flipper" color="goldenrod"/>
            
            </Button> : null}
        {isMinus ? <Button as={Link} to='/delete-project' onClick={() => setIsMinus(!isMinus)}>Delete Project</Button> : null}
        {isMinus ? <Button as={Link} to='/delete-task' onClick={() => setIsMinus(!isMinus)}>Delete Task</Button> : null}
        {!isShow ? <Button onClick={() => {
          setIsShow(!isShow)
          setIsMinus(false)}}>

            <FaPlus icon="flipper" size="1.5em" className="flipper" color="goldenrod"/>
            
            </Button> : null}
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
