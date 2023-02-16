package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.mappers.DishCategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dish-categories")
@RequiredArgsConstructor
public class DishCategoryController {

    private final DishCategoryService dishCategoryService;

    private final DishCategoryMapper dishCategoryMapper;

    @GetMapping("/")
    public List<DishCategory> getAllDishCategories() {
        return dishCategoryService.getAllDishCategories();
    }

    @GetMapping("/{id}")
    public Optional<DishCategory> getDishCategoryById(@PathVariable Long id) {
        return dishCategoryService.findById(id);
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public DishCategory createDishCategoryById(@RequestBody @Valid DishCategoryDTO dishCategoryDTO) {
        DishCategory newDishCategory = dishCategoryMapper.toEntity(dishCategoryDTO);
        return dishCategoryService.createDishCategory(newDishCategory);
    }

    @PutMapping("/{id}")
    public DishCategory updateDishCategory(@PathVariable Long id, @RequestBody DishCategory newDishCategory) {
        Optional<DishCategory> oldDishCategory = dishCategoryService.findById(id);
        newDishCategory.setId(oldDishCategory.get().getId());
        return dishCategoryService.createDishCategory(newDishCategory);
    }

    @DeleteMapping("/{id}")
    public DishCategory deleteDishCategoryById(@PathVariable Long id) {
        return dishCategoryService.deleteDishCategory(id);
    }
}
