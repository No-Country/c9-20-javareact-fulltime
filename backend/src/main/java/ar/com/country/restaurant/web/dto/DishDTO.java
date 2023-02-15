package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.web.dto.validation.OnCreate;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public record DishDTO(
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id,

        @NotBlank(groups = OnCreate.class)
        String name,

        @NotBlank(groups = OnCreate.class)
        String description,

        @NotBlank(groups = OnCreate.class)
        String image,

        @NotBlank(groups = OnCreate.class)
        Double price,

        @NotBlank(groups = OnCreate.class)
        String category
) {}
