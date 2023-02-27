package ar.com.country.restaurant.web.mappers;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.web.dto.CartDTO;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.dto.ItemCartDTO;
import ar.com.country.restaurant.web.dto.UserDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {DishDTO.class, ItemCartDTO.class, UserDTO.class})
public interface CartMapper {

    Cart toEntity(CartDTO cartDto);

    CartDTO toDto(Cart cart);
}
