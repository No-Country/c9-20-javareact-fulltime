package ar.com.country.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public final class DishDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private final Long id;

    @NotBlank
    private final String name;

    @NotBlank
    private final String description;

    @NotBlank
    private final String image;

    @NotBlank
    private final Double price;

    @NotBlank
    private final String category;
}
