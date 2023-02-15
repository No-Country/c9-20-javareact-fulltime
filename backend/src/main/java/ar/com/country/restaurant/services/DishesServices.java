package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Dish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface DishesServices {

    Page<Dish> searchDishByNameAndDescription(String query, Pageable pageable);

    List<Dish> getAllDishes();

    Dish createDish(Dish dish);

    Optional<Dish> findById(Long id);

    Dish deleteById(Long id);

}
