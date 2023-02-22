import styled from "styled-components";

export const Admin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2d2d2d;

  nav {
    display: flex;
    justify-content: space-around;
    gap: 70%;
    background-color: black;
    padding: 20px 0;
  }

  .administrator {
    display: flex;
  }

  object {
    margin-bottom: 13px;
    margin-right: 3px;
  }

  a {
    margin-top: 16px;
  }

  .container {
    display: flex;
    height: 85vh;
  }

  .list {
    width: 15%;
    // background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: right;
    padding-left: 35px;
    margin-top: 20px;
  }

  .list > p {
    padding-left: 5px;
  }

  .component {
    width: 85%;
    margin-top: 20px;
    // background-color: red;
  }

  p,
  h3 {
    margin: 0;
  }
`;

export const DishesListStyles = styled.div`
  .head {
    display: flex;
    justify-content: space-around;
    gap: 62%;
  }
`;
