import React from "react";
import { CreateDishStyles } from "../../styled-components/Admin.styled";
import image from "./icon/Union.png";

const CreateDish = () => {
  const [id, setId] = React.useState(false);
  const [discount, setdiscount] = React.useState(false);
  const categoriesList = [
    { name: "Pastas" },
    { name: "Postres" },
    { name: "Churrasqueria" },
    { name: "Cafeteria" },
    { name: "Saludable" },
    { name: "Pizzas" },
  ];

  return (
    <>
      <CreateDishStyles>
        <p>Agregar plato</p>
        <form action="">
          <label htmlFor="name">Nombre del plato</label>
          <br />
          <input
            placeholder="Ingrese el nombre del plato"
            required
            type="text"
            id="name"
            className="name"
          />
          <br />
          <div className="description">
            <label htmlFor="description">Descripcion</label>
          </div>
          <input
            placeholder="Ingrese la descripcion del plato"
            required
            type="text"
            id="description"
            className="description"
          />
          <div className="image_import">
            <label htmlFor="image">Imagen</label>
            <label className="import" htmlFor="price">
              Importe
            </label>
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
            <input
              placeholder="Ingrese cantidad"
              required
              className="price"
              type="text"
              id="price"
            />
          </div>
          <div className="categoryDiv"></div>
          <label htmlFor="category">Categoria</label>
          <select
            required
            onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
            name=""
            id={id}
            className="category"
          >
            <option value="" disabled selected hidden>
              Selecciona la categoria
            </option>
            {categoriesList.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <br />
          <div className="container">
            <div className="promotions">
              <label className="checkbox" htmlFor="promotion">
                <input
                  className="checkboxInput"
                  type="checkbox"
                  name=""
                  id="promotion"
                  onChange={(e) => {
                    if (discount == false) {
                      setdiscount(true);
                    } else setdiscount(false);
                  }}
                />
                <span></span>
                Promociones
              </label>
              {discount == true && (
                <>
                  <div className="discount">
                    <label htmlFor="">Importe</label>
                    <input
                      className="discountInput"
                      placeholder="Ingrese descuento"
                      type="text"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="button">
              <button>Confirmar</button>
            </div>
          </div>
        </form>
      </CreateDishStyles>
    </>
  );
};

export default CreateDish;
