package ar.com.country.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

public record AddressDTO(
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id,

        @NotBlank
        String street,

        @NotBlank
        String number,

        @NotBlank
        String city,

        @NotBlank
        String state,

        @NotBlank
        String country,

        @NotBlank
        String zipCode
) implements Serializable {
}
