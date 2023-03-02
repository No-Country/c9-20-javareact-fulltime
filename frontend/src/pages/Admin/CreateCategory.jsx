import React from "react";
import { CategoryListStyles } from "../../styled-components/Admin.styled";
import image from "./icon/Union.png";

export default function CreateCategory() {
  const [data, setData] = React.useState({'nombre': '' , 'imagen':''})


  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  return (
    <CategoryListStyles>
      <div className="createCategory">
        <p>Crear Categoría</p>
        <label htmlFor="nombreCategoria">Nombre:</label>
        <input
          type="text"
          placeholder="Ingrese el nombre de la categoría"
          className="name"
          id="nombreCategoria"
          value={data.nombre}
          name='nombre'
          onChange={(e) => handleChange(e)}
        />

        <div className="image_button">
          <div className="image_import">
            <label htmlFor="image">Imagen</label>
          </div>
          <div className="image_price">
            <input
              hidden
              required
              placeholder="Inserte imagen del producto"
              type="file"
              id="image"
              className="image"
              name='imagen'
            />
            <label className="inputImage" htmlFor="image">
              Inserte imagen del producto
              <img src={image} alt="" />
            </label>
            <div className="button">
              <button>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </CategoryListStyles>
  );
}
