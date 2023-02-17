package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.dao.entities.spec.DishSpec;
import ar.com.country.restaurant.exceptions.DishNotFoundException;
import ar.com.country.restaurant.repositories.DishRepository;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.util.BeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DishServiceImpl implements DishService {
    private final DishCategoryService dishCategoryService;
    private final DishRepository dishRepository;

    @Override
    public Page<Dish> searchDishByNameAndDescription(String query, Pageable pageable) {
        return dishRepository.searchDishByNameAndDescription(query, pageable);
    }

    @Override
    public Page<Dish> getDishes(Pageable pageable) {
        return dishRepository.findAll(pageable);
    }

    @Override
    public Dish getDishById(Long dishId) {
        return dishRepository
                .findById(dishId)
                .orElseThrow(() -> new DishNotFoundException(dishId));
    }

    @Override
    public Dish createDish(DishSpec dishSpec) {
        Dish newDish = dishSpec.dish();
        DishCategory dishCategory = dishCategoryService.getDishCategoryById(dishSpec.categoryId());
        newDish.setCategory(dishCategory);
        return dishRepository.save(newDish);
    }

    @Override
    public Dish updateDish(Long dishId, DishSpec dishSpec) {
        Dish dishToUpdate = getDishById(dishId);
        BeanUtils.copyProperties(dishSpec.dish(), dishToUpdate);
        DishCategory dishCategory = dishCategoryService.getDishCategoryById(dishSpec.categoryId());
        dishToUpdate.setCategory(dishCategory);
        return dishRepository.save(dishToUpdate);
    }

    @Override
    public Dish deleteById(Long dishId) {
        Dish dishToDelete = getDishById(dishId);
        dishRepository.deleteById(dishId);
        return dishToDelete;
    }

}
