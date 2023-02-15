package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.dao.entities.CardType;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

public record PaymentMethodDTO(
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id,

        @NotNull
        CardType type,

        @NotBlank
        String number,

        @NotBlank
        String holder,

        @NotNull
        LocalDate expirationDate,

        @NotBlank
        String cvv
) implements Serializable {
}
