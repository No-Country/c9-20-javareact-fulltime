package ar.com.country.restaurant.web.dto.auth;

import lombok.Builder;

@Builder
public record TokenDTO(String username, String accessToken, String refreshToken) {

}
