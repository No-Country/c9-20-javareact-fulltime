package ar.com.country.restaurant.web.dto.auth;

import lombok.Builder;

@Builder
public record TokenDTO(Long id, String email, String accessToken, String refreshToken) {

}
