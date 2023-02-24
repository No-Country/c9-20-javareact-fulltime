package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.web.dto.ItemCartDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemCartMapper {
    ItemCart toEntity(ItemCartDTO itemCartDTO);

    ItemCartDTO toDto(ItemCart itemCart);

}
