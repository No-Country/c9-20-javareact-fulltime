package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.exceptions.DishIdNotFoundException;
import ar.com.country.restaurant.repositories.DishesRepository;
import ar.com.country.restaurant.services.DishesServices;
import ar.com.country.restaurant.web.dto.DishDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Component
public class DishesServicelpml implements DishesServices {
    @Autowired
    private DishesRepository dishesRepository;

    private DishDTO dishDTO;

    @Override
    public List<Dish> getAllDishes() {
        return dishesRepository.findAll();
    }

    @Override
    public Dish createDish(Dish dish) {
        return dishesRepository.save(dish);
    }

    @Override
    public Optional<Dish> findById(Long id) {
        ensureUniqueDish(id);
        return dishesRepository.findById(id);
    }

    @Override
    public Dish deleteById(Long id) {
        dishesRepository.deleteById(id);
        return null;
    }

    private void ensureUniqueDish(Long id) {
        dishesRepository.findById(id).orElseThrow(()-> new DishIdNotFoundException());
    }

}