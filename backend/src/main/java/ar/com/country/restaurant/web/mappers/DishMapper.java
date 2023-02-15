package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.web.dto.DishDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface DishMapper {
    Dish toEntity(DishDTO dishDTO);
    DishDTO toDto(Dish dish);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Dish partialUpdate(DishDTO dishDTO, @MappingTarget Dish dish);
}
