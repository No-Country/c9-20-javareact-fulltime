import styled from "styled-components";

export const AdminCreateStyle = styled.div`
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
    padding-left: 50px;
    margin-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  .component {
    width: 85%;
    margin-top: 20px;
    // background-color: red;
  }

  .secciones {
    text-align: left;
    font-size: x-large;
    font-family: var(--font-family);
    color: #fff;
    margin: 0 0;
  }

  button {
    text-align: left;
    font-size: large;
    font-family: var(--font-family);
    color: #fff;
    :hover {
      cursor: pointer;
      color: #fcdb9b;
    }
  }

`;

export const DishesListStyles = styled.div`
  .head {
    display: flex;
    justify-content: space-around;
    gap: 62%;
  }
`;

export const CategoryListStyles = styled.div`

margin-left: 50px;

.createCategory{
  width: fit-content;
}

.tituloListado{
  font-size: 24px;
  font-weight: 500;
}

.listaListado{
  font-size: 15px;
  font-weight: 400;
}

.inputCategoria{
    width: 446px;
    height: 40px;
    border: solid #acacac 1.75px;
    background-color: transparent;
    border-radius: 5px;
    padding-left: 25px;
    margin-bottom: 10px;
  }

  button {
    border-radius: 4px;
    background-color: #ffa800;
    color: black;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 70px;
    cursor: pointer;
    width: 228px;
    height: 50px;
    float: right;
  }
`;

