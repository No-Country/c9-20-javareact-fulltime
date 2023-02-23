import React from "react";
import { AdminCreateStyle } from "../../styled-components/Admin.styled";
import DishesList from "./DishesList";
import CategoryList from "./CategoryList";

const AdminCreate = () => {
  //Este estado va a definir en un string cual es el componente a mostrar.
  const [mostrar, setMostrar] = React.useState('Platos_Listado')
  return (
    <>
      <AdminCreateStyle>
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
            <p className='secciones'>Platos</p >
            <button onClick={()=> setMostrar('Platos_Listado')}>Listado</button>
            <button onClick={()=> setMostrar('Platos_Listado')}>Agregar</button>
            <p className='secciones'>Categoria</p >
            <button onClick={()=> setMostrar('Categoria_Listado')}>Listado</button>
            <button onClick={()=> setMostrar('Categoria_Listado')}>Agregar</button>
            <p className='secciones'>Ventas</p >
            <button>Listado</button>
          </div>
          <div className="component">

             
              {(mostrar == 'Platos_Listado') && <DishesList />}
              {(mostrar == 'Categoria_Listado') && <CategoryList />}
              {(mostrar == 'a') && <DishesList />}
              {(mostrar == 'b') && <DishesList />}
              {(mostrar == 'c') && <DishesList />}
              
            
            
          </div>
        </div>
      </AdminCreateStyle>
    </>
  );
};

export default AdminCreate;
