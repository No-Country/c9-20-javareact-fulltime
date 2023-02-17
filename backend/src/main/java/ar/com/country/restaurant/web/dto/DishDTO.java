package ar.com.country.restaurant.web.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

public record DishDTO(
        @NotBlank
        String name,

        @NotBlank
        String description,

        @NotBlank
        String image,

        @PositiveOrZero
        Double price,

        @NotNull
        Long categoryId
) {
}
