package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.exceptions.DishCategoryNameAlreadyExistsException;
import ar.com.country.restaurant.exceptions.DishCategoryNotFoundException;
import ar.com.country.restaurant.repositories.DishCategoryRepository;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.util.BeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DishCategoryServiceImpl implements DishCategoryService {
    private final DishCategoryRepository dishCategoryRepository;

    @Override
    public List<DishCategory> getDishCategories() {
        return dishCategoryRepository.findAllDishCategoriesByNameAsc();
    }

    @Override
    public DishCategory getDishCategoryById(Long categoryId) {
        return dishCategoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new DishCategoryNotFoundException(categoryId));
    }

    @Override
    public DishCategory createDishCategory(DishCategory newDishCategory) {
        ensureUniqueDishCategoryName(newDishCategory.getName());
        return dishCategoryRepository.save(newDishCategory);
    }

    @Override
    public DishCategory updateDishCategory(Long categoryId, DishCategory updatedDishCategory) {
        DishCategory categoryToUpdate = getDishCategoryById(categoryId);
        if (!categoryToUpdate.getName().equals(updatedDishCategory.getName())) {
            ensureUniqueDishCategoryName(updatedDishCategory.getName());
        }
        BeanUtils.copyProperties(updatedDishCategory, categoryToUpdate);
        return categoryToUpdate;
    }

    @Override
    public DishCategory deleteDishCategory(Long categoryId) {
        DishCategory categoryToDelete = getDishCategoryById(categoryId);
        dishCategoryRepository.deleteById(categoryId);
        return categoryToDelete;
    }

    private void ensureUniqueDishCategoryName(String name) {
        boolean nameAlreadyExists = dishCategoryRepository.existsByNameIgnoreCase(name);
        if (nameAlreadyExists) {
            throw new DishCategoryNameAlreadyExistsException(name);
        }
    }

}
