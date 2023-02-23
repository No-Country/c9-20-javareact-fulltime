import React from 'react'
import { CategoryListStyles } from "../../styled-components/Admin.styled";
import ico1 from './icon/basura.png'
import ico2 from './icon/lapiz.png'

export default function CategoryList() {
    //Este array es momentaneo hasta poder consumir esta informacion de la API
    let infodeApi = ['Pastas','Mexicana', 'Hamburguesas']
  return (
    <CategoryListStyles>

        <div className='listadoCategoria'>
            <p className='tituloListado'>Listado de Categoría</p>
            {
                infodeApi.map((e) => <>
                
                    <div className='listadoCatDiv'>
                        <p className='listaListado'>{e}</p>
                        <div>
                            <img src={ico2} alt="iconolapiz" className='iconoCategorias'/>
                            <img src={ico1} alt="iconobasura" className='iconoCategorias'/>
                        </div>
                    </div>
                    <hr />
                </> 
                    
                
              
               
                
                
             )
            }
        </div>
    </CategoryListStyles>
  )
}
