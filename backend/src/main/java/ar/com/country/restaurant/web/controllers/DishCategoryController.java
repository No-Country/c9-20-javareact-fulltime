package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.mappers.DishCategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class DishCategoryController {
    private final DishCategoryService dishCategoryService;
    private final DishCategoryMapper dishCategoryMapper;

    @GetMapping
    public List<DishCategoryDTO> getAllDishCategories() {
        List<DishCategory> result = dishCategoryService.getDishCategories();
        return dishCategoryMapper.toDtoList(result);
    }

    @GetMapping("/{categoryId}")
    public DishCategoryDTO getDishCategoryById(@PathVariable Long categoryId) {
        DishCategory result = dishCategoryService.getDishCategoryById(categoryId);
        return dishCategoryMapper.toDto(result);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DishCategoryDTO> createDishCategory(@RequestBody @Valid DishCategoryDTO dishCategoryDto) {
        DishCategory newDishCategory = dishCategoryMapper.toEntity(dishCategoryDto);
        DishCategory result = dishCategoryService.createDishCategory(newDishCategory);
        return ResponseEntity
                .created(URI.create("/api/categories/" + result.getId()))
                .body(dishCategoryMapper.toDto(result));
    }

    @PutMapping("/{categoryId}")
    public DishCategoryDTO updateDishCategory(
            @PathVariable Long categoryId,
            @RequestBody DishCategoryDTO dishCategoryDto
    ) {
        DishCategory updatedDishCategory = dishCategoryMapper.toEntity(dishCategoryDto);
        DishCategory result = dishCategoryService.updateDishCategory(categoryId, updatedDishCategory);
        return dishCategoryMapper.toDto(result);
    }

    @DeleteMapping("/{categoryId}")
    public DishCategoryDTO deleteDishCategoryById(@PathVariable Long categoryId) {
        DishCategory result = dishCategoryService.deleteDishCategory(categoryId);
        return dishCategoryMapper.toDto(result);
    }

}
