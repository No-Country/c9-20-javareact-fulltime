import React, { useState } from "react";
import { DishesListStyles } from "../../styled-components/Admin.styled";

const DishesList = () => {
  const categoriesList = [
    { name: "Pastas" },
    { name: "Postres" },
    { name: "Churrasqueria" },
    { name: "Cafeteria" },
    { name: "Saludable" },
    { name: "Pizzas" },
  ];

  const [id, setId] = useState(false);
  console.log(id);

  return (
    <>
      <DishesListStyles>
        <div className="head">
          <h3>Listado de platos</h3>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              setId(true);
            }}
            name=""
            id={id}
          >
            <option value="" disabled selected hidden>
              Categories
            </option>
            {categoriesList.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="items">{}</div>
      </DishesListStyles>
    </>
  );
};

export default DishesList;
