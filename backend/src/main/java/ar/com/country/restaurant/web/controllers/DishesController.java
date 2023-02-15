package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.services.DishesServices;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.mappers.DishMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dishes")
@Validated
public class DishesController {

    private final DishesServices dishesServices;
    private final DishMapper dishMapper;

    public DishesController(DishesServices dishesServices, DishMapper dishMapper) {
        this.dishesServices = dishesServices;
        this.dishMapper = dishMapper;
    }

    @GetMapping("/search")
    public Page<Dish> searchDishesByNameAndDescription(
            @RequestParam String query,
            @PageableDefault Pageable pageable
    ) {
        return dishesServices.searchDishByNameAndDescription(query, pageable);
    }

    @GetMapping("/")
    public List<Dish> findAllDishes() {
        return dishesServices.getAllDishes();
    }

    @GetMapping("/{id}")
    public Optional<Dish> getDishById(@PathVariable Long id) {
        return dishesServices.findById(id);
    }

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public Dish createDish(@RequestBody @Valid DishDTO dishDTO) {
        Dish newDish = dishMapper.toEntity(dishDTO);
        return dishesServices.createDish(newDish);
    }

    @PutMapping("/{id}")
    public Dish updateDish(@PathVariable Long id, @RequestBody Dish newDish) {
        Optional<Dish> oldDish = dishesServices.findById(id);
        newDish.setId(oldDish.get().getId());
        return dishesServices.createDish(newDish);
    }

    @DeleteMapping("/{id}")
    public Dish deleteDishById(@PathVariable Long id) {
        return dishesServices.deleteById(id);
    }

}
