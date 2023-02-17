package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.criteria.DishFilterCriteria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DishService {

    Page<Dish> searchDishByNameAndDescription(String query, Pageable pageable);

    Page<Dish> getDishes(DishFilterCriteria filterCriteria);

    Dish getDishById(Long id);

    Dish createDish(Dish dish);

    Dish updateDish(Long dishId, Dish dish);

    Dish deleteById(Long dishId);

}
