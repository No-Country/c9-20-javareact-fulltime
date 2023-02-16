package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.dao.entities.CardType;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

@Data
public final class PaymentMethodDTO implements Serializable {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private final Long id;

    @NotNull
    private final CardType type;

    @NotBlank
    private final String number;

    @NotBlank
    private final String holder;

    @NotNull
    private final LocalDate expirationDate;

    @NotBlank
    private final String cvv;
}
