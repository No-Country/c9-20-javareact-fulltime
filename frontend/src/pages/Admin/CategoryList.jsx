import React from 'react'
import { CategoryListStyles } from "../../styled-components/Admin.styled";

export default function CategoryList() {
    //Este array es momentaneo hasta poder consumir esta informacion de la API
    let infodeApi = ['1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs','1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs', '1x Ñoquis Orden #123RGR231567Y Confirmado 1 de Jul. 2022 21:00Hs']
  return (
    <CategoryListStyles>

        <div>
            <p className='tituloListado'>Listado de Categoría</p>
            {
                infodeApi.map((e) => <p className='listaListado'>{e}</p>)
            }
        </div>
    </CategoryListStyles>
  )
}
