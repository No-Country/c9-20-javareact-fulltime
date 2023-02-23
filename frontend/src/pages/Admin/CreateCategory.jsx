import React from 'react'
import { CategoryListStyles } from "../../styled-components/Admin.styled";


export default function CreateCategory() {
  return (
    <CategoryListStyles>
        <div className='createCategory'>
            <p>Crear Categoría</p>
            <label htmlFor="nombreCategoria">Nombre:</label>
            <br />
            <input type="text" placeholder='Ingrese el nombre de la categoría' className='inputCategoria' name="nombreCategoria" /> 
            <br />
            <button>Confirmar</button>
        </div>
    </CategoryListStyles>
  )
}
