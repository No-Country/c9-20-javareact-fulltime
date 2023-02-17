package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.DishCategory;

import java.util.List;
import java.util.Optional;

public interface DishCategoryService {

    List<DishCategory> getAllDishCategories();

    DishCategory getDishCategoryById(Long categoryId);

    DishCategory createDishCategory(DishCategory dishCategory);

    DishCategory deleteDishCategory(Long id);

    Optional<DishCategory> findById(Long id);
}
