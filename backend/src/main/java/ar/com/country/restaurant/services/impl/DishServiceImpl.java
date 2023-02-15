package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.exceptions.DishIdNotFoundException;
import ar.com.country.restaurant.repositories.DishRepository;
import ar.com.country.restaurant.services.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DishServiceImpl implements DishService {
    private final DishRepository dishRepository;

    @Override
    public Page<Dish> searchDishByNameAndDescription(String query, Pageable pageable) {
        return dishRepository.searchDishByNameAndDescription(query, pageable);
    }

    @Override
    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }

    @Override
    public Dish createDish(Dish dish) {
        return dishRepository.save(dish);
    }

    @Override
    public Optional<Dish> findById(Long id) {
        ensureUniqueDish(id);
        return dishRepository.findById(id);
    }

    @Override
    public Dish deleteById(Long id) {
        dishRepository.deleteById(id);
        return null;
    }

    private void ensureUniqueDish(Long id) {
        dishRepository.findById(id).orElseThrow(() -> new DishIdNotFoundException());
    }

}
