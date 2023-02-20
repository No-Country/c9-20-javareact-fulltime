import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 106px;
  padding: 0 2em;
  color: white;
  background-color: black;
  border-radius: 0px 0px 10px 10px;

  input {
    flex-grow: 1;
    height: 38px;
    width: 400px;
    border-radius: 8px;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;
    list-style-type: none;
  }
`