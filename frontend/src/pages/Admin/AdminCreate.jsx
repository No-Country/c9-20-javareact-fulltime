import React from "react";
import { Admin } from "../../styled-components/Admin.styled";
import DishesList from "./DishesList";

const AdminCreate = () => {
  return (
    <>
      <Admin>
        <nav>
          <img src="../../public/icons/logo.svg" alt="" />
          <div className="administrator">
            <object
              width="17px"
              data="../../public/icons/usersvg.svg"
              type=""
            ></object>
            <a>Administrador</a>
          </div>
        </nav>
        <div className="container">
          <div className="list">
            <h3>Platos</h3>
            <p>Listado</p>
            <p>Agregar</p>
            <h3>Categoria</h3>
            <p>Listado</p>
            <p>Agregar</p>
            <h3>Ventas</h3>
            <p>Listado</p>
          </div>
          <div className="component">
            <DishesList />
          </div>
        </div>
      </Admin>
    </>
  );
};

export default AdminCreate;
