package ar.com.country.restaurant.dao.entities.spec;

import ar.com.country.restaurant.dao.entities.Dish;

public record DishSpec(
        Dish dish,
        Long categoryId
) {
}
