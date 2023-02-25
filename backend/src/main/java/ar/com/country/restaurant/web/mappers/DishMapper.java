package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.dto.DishResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = DishCategoryMapper.class)
public interface DishMapper {

    Dish toEntity(DishDTO dishDto);

    @Mapping(target = "hasPromotion", expression = "java(dish.hasPromotion())")
    DishResponseDTO toResponseDto(Dish dish);

}
