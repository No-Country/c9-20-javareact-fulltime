package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = DishMapper.class)
public interface DishCategoryMapper {

    DishCategory toEntity(DishCategoryDTO dishCategoryDto);

    DishCategoryDTO toDto(DishCategory dishCategory);

    List<DishCategoryDTO> toDtoList(List<DishCategory> dishCategoryList);
}
