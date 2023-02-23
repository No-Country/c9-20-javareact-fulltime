import React from 'react'
import { CategoryListStyles } from "../../styled-components/Admin.styled";

export default function CategoryList() {
    //Este array es momentaneo hasta poder consumir esta informacion de la API
    let infodeApi = ['1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs','1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs', '1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs']
  return (
    <CategoryListStyles>
        <div>
            <p>Crear Categoría</p>
            <label htmlFor="nombreCategoria">Nombre:</label>
            <br />
            <input type="text" placeholder='Ingrese el nombre de la categoría' className='inputCategoria' name="nombreCategoria" /> 
            <br />
            <button>Confirmar</button>
        </div>
        <div>
            <p>Listado de Categoría</p>
            {
                infodeApi.map((e) => <p>{e}</p>)
            }
        </div>
    </CategoryListStyles>
  )
}
