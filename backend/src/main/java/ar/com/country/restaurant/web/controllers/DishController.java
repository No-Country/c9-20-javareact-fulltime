package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.hateoas.assemblers.DishModelAssembler;
import ar.com.country.restaurant.web.mappers.DishMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.data.web.SortDefault;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/dishes")
@RequiredArgsConstructor
@Validated
public class DishController {
    private final DishService dishService;
    private final DishMapper dishMapper;
    private final DishModelAssembler dishModelAssembler;
    private final PagedResourcesAssembler<Dish> dishPagedResourcesAssembler;

    @GetMapping("/search")
    public PagedModel<DishDTO> searchDishesByNameAndDescription(
            @RequestParam String query,
            @PageableDefault Pageable pageable
    ) {
        Page<Dish> result = dishService.searchDishByNameAndDescription(query, pageable);
        return dishPagedResourcesAssembler.toModel(result, dishModelAssembler);
    }

    @GetMapping
    public PagedModel<DishDTO> getDishes(
            @PageableDefault @SortDefault Pageable pageable
    ) {
        Page<Dish> result = dishService.getDishes(pageable);
        return dishPagedResourcesAssembler.toModel(result, dishModelAssembler);
    }

    @GetMapping("/{dishId}")
    public DishDTO getDishById(@PathVariable Long dishId) {
        Dish result = dishService.getDishById(dishId);
        return dishModelAssembler.toModel(result);
    }

    @PostMapping
    public ResponseEntity<DishDTO> createDish(@RequestBody @Valid DishDTO dishDto) {
        Dish newDish = dishMapper.toEntity(dishDto);
        Dish result = dishService.createDish(newDish);
        return ResponseEntity
                .created(URI.create("/api/dishes/" + result.getId()))
                .body(dishModelAssembler.toModel(result));
    }

    @PutMapping("/{dishId}")
    public DishDTO updateDish(
            @PathVariable Long dishId,
            @RequestBody @Valid DishDTO dishDto
    ) {
        Dish dish = dishMapper.toEntity(dishDto);
        Dish result = dishService.updateDish(dishId, dish);
        return dishModelAssembler.toModel(result);
    }

    @DeleteMapping("/{dishId}")
    public DishDTO deleteDishById(@PathVariable Long dishId) {
        Dish result = dishService.deleteById(dishId);
        return dishMapper.toDto(result);
    }

}
