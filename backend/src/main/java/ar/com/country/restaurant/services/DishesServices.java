package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Dish;

import java.util.List;

public interface DishesServices {

    List<Dish> getAllDishes();

    Dish createDish(Dish dish);

    Dish findById(Long id);

    Dish deleteById(Long id);

}
