package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.web.dto.validation.OnCreate;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public record DishCategoryDTO(

        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id,
        @NotBlank(groups = OnCreate.class)
        String name
) {
}
