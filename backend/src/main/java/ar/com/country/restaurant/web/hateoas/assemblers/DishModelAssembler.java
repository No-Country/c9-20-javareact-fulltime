package ar.com.country.restaurant.web.hateoas.assemblers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.web.controllers.DishController;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.mappers.DishMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

@Component
@RequiredArgsConstructor
public class DishModelAssembler implements RepresentationModelAssembler<Dish, DishDTO> {
    private final DishMapper dishMapper;
    private Dish dish;

    @Override
    public DishDTO toModel(Dish dish) {
        this.dish = dish;
        DishDTO model = dishMapper.toDto(dish);
        model.add(selfLink());
        return model;
    }

    public Link selfLink() {
        return linkTo(DishController.class)
                .slash(dish.getId())
                .withSelfRel();
    }

}
