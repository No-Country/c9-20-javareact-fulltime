package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DishCategoryMapper {

    DishCategory toEntity(DishCategoryDTO dishCategoryDTO);

    DishCategoryDTO toDto(DishCategory dishCategory);

}
