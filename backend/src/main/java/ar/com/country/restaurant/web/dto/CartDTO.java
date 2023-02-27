package ar.com.country.restaurant.web.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class CartDTO {

        private Long id;

        private Long userId;

        private DishDTO dish;

        private Double total;
}
