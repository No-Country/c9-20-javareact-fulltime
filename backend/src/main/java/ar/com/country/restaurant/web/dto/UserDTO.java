package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.dao.entities.UserRole;
import ar.com.country.restaurant.web.dto.validation.OnCreate;
import ar.com.country.restaurant.web.dto.validation.Password;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public final class UserDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private final Long id;

    @NotBlank
    private final String dni;

    @NotBlank
    private final String name;

    @NotBlank
    private final String lastName;

    @Email
    @NotBlank
    private final String email;

    @Password
    @NotBlank(groups = OnCreate.class)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private final String password;

    @NotBlank
    private final String phone;

    @NotNull
    private final UserRole role;
}
