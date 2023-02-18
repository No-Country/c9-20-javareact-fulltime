package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.dto.DishCategoryResponseDTO;
import ar.com.country.restaurant.web.dto.DishResponseDTO;
import org.mapstruct.Mapper;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Mapper(componentModel = "spring", uses = DishMapper.class)
public interface DishCategoryMapper {

    DishCategory toEntity(DishCategoryDTO dishCategoryDto);

    DishCategoryDTO toDto(DishCategory dishCategory);

    List<DishCategoryDTO> toDtoList(List<DishCategory> dishCategoryList);

    DishCategoryResponseDTO toResponseDto(DishCategory dishCategory);
}
