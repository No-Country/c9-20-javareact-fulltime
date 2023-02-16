package ar.com.country.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
public final class AddressDTO implements Serializable {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private final Long id;

    @NotBlank
    private final String street;

    @NotBlank
    private final String number;

    @NotBlank
    private final String city;

    @NotBlank
    private final String state;

    @NotBlank
    private final String country;

    @NotBlank
    private final String zipCode;
}
