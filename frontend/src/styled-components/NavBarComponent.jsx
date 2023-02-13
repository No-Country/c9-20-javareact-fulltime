import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavBarStyled = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 106px;
  padding: 0 5em;
  color: white;
  background-color: black;
  border-radius: 0px 0px 10px 10px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;
    list-style-type: none;
  }
`

export const CartWidget = styled.div`
  /* img:nth-child(2){
    position: relative;
    top: -.5em;
    left: -.5em;
  } */
  span {
    position: relative;
    top: -2.5em;
    left: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    background-color: red;
    width: 1.7em;
    height: 1.7em;
    border-radius: 1em;
  }
`

export const StyledLink = styled(NavLink)`
  &.active {
    color: #FFA800;
  }
`