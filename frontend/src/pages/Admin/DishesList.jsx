import React from "react";
import { DishesListStyles } from "../../styled-components/Admin.styled";
import DishesListComponent from "./DishesListComponent";

const DishesList = (props) => {
  const categoriesList = [
    { name: "Pastas" },
    { name: "Postres" },
    { name: "Churrasqueria" },
    { name: "Cafeteria" },
    { name: "Saludable" },
    { name: "Pizzas" },
  ];

  const categorories = props.categories;
  const dishes = props.dishes;
  const [id, setId] = React.useState(false);

  categorories && console.log(categorories._embedded.dishCategories);
  dishes && console.log(dishes._embedded.dishes);

  const dishesChurrasqueria = dishes?._embedded.dishes.filter(
    (dish) => dish.category.id == "6"
  );

  return (
    <>
      <DishesListStyles>
        <div className="head">
          <p>Listado de platos</p>
          <div className="select">
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setId(e.target.value);
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
        </div>
        <div className="items">
          {id == "Pastas" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
          {id == "Postres" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
          {id == "Churrasqueria" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
          {id == "Cafeteria" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
          {id == "Saludable" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
          {id == "Pizzas" &&
            dishesChurrasqueria.map((dish) => (
              <DishesListComponent name={{ name: dish.name }} />
            ))}
        </div>
      </DishesListStyles>
    </>
  );
};

export default DishesList;
