package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.exceptions.DishCategoryNameAlreadyExistsException;
import ar.com.country.restaurant.exceptions.DishCategoryNotFoundException;
import ar.com.country.restaurant.repositories.DishCategoryRepository;
import ar.com.country.restaurant.services.DishCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DishCategoryServiceImpl implements DishCategoryService {

    private DishCategoryRepository dishCategoryRepository;

    @Override
    public List<DishCategory> getAllDishCategories() {
        return dishCategoryRepository.findAllDishCategoriesByOrderByNameAsc();
    }

    @Override
    public DishCategory createDishCategory(DishCategory dishCategory) {
        ensureUniqueDishCategoryName(dishCategory.getName());
        return dishCategoryRepository.save(dishCategory);
    }

    @Override
    public DishCategory deleteDishCategory(Long id) {
        dishCategoryRepository.deleteById(id);
        return null;
    }

    @Override
    public Optional<DishCategory> findById(Long id) {
        existsDishCategory(id);
        return dishCategoryRepository.findById(id);
    }

    private void existsDishCategory(Long id) {
        dishCategoryRepository.findById(id).orElseThrow(() -> new DishCategoryNotFoundException());
    }

   private void ensureUniqueDishCategoryName(String name){
        boolean nameAlreadyExists = dishCategoryRepository.existsByName(name);
        if (nameAlreadyExists) {
            throw new DishCategoryNameAlreadyExistsException(name);
        }
    }
}
