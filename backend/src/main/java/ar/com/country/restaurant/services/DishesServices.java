package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Dish;

import java.util.List;
import java.util.Optional;

public interface DishesServices {

    List<Dish> getAllDishes();

    Dish createDish(Dish dish);

    Optional<Dish> findById(Long id);

    Dish deleteById(Long id);

}
