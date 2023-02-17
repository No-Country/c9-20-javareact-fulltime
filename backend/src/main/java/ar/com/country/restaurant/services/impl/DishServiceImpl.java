package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.criteria.DishFilterCriteria;
import ar.com.country.restaurant.exceptions.DishNotFoundException;
import ar.com.country.restaurant.repositories.DishRepository;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.util.BeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DishServiceImpl implements DishService {
    private final DishRepository dishRepository;

    @Override
    public Page<Dish> searchDishByNameAndDescription(String query, Pageable pageable) {
        return dishRepository.searchDishByNameAndDescription(query, pageable);
    }

    @Override
    public Page<Dish> getDishes(DishFilterCriteria filterCriteria) {
        if (filterCriteria.filterByCategory()) {
            return dishRepository.findDishesByDishCategoryId(filterCriteria.categoryId(), filterCriteria.pageable());
        }
        return dishRepository.findAll(filterCriteria.pageable());
    }

    @Override
    public Dish getDishById(Long dishId) {
        return dishRepository
                .findById(dishId)
                .orElseThrow(() -> new DishNotFoundException(dishId));
    }

    @Override
    public Dish createDish(Dish dish) {
        return dishRepository.save(dish);
    }

    @Override
    public Dish updateDish(Long dishId, Dish updatedDish) {
        Dish oldDish = getDishById(dishId);
        BeanUtils.copyProperties(updatedDish, oldDish);
        return dishRepository.save(oldDish);
    }

    @Override
    public Dish deleteById(Long dishId) {
        Dish dishToDelete = getDishById(dishId);
        dishRepository.deleteById(dishId);
        return dishToDelete;
    }

}
