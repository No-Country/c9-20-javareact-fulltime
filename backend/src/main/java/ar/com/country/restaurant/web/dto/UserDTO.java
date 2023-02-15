package ar.com.country.restaurant.web.dto;

import ar.com.country.restaurant.dao.entities.UserRole;
import ar.com.country.restaurant.web.dto.validation.OnCreate;
import ar.com.country.restaurant.web.dto.validation.Password;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record UserDTO(
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id,

        @NotBlank(groups = OnCreate.class)
        String name,

        @NotBlank(groups = OnCreate.class)
        String lastName,

        @Email
        @NotBlank(groups = OnCreate.class)
        String email,

        @Password
        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        @NotBlank(groups = OnCreate.class)
        String password,

        @NotBlank(groups = OnCreate.class)
        String phone,

        @NotNull(groups = OnCreate.class)
        UserRole role
) {
}
