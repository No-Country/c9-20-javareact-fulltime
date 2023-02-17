package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.DishCategory;

import java.util.List;

public interface DishCategoryService {

    List<DishCategory> getDishCategories();
    
    DishCategory getDishCategoryById(Long categoryId);

    DishCategory createDishCategory(DishCategory newDishCategory);

    DishCategory updateDishCategory(Long categoryId, DishCategory updatedDishCategory);

    DishCategory deleteDishCategory(Long id);

}
