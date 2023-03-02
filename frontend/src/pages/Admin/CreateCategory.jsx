import React from "react";
import { CategoryListStyles } from "../../styled-components/Admin.styled";
import image from "./icon/Union.png";

export default function CreateCategory() {
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
