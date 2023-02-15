package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.security.TokenGenerator;
import ar.com.country.restaurant.services.UserService;
import ar.com.country.restaurant.web.dto.UserDTO;
import ar.com.country.restaurant.web.dto.auth.LoginDTO;
import ar.com.country.restaurant.web.dto.auth.TokenDTO;
import ar.com.country.restaurant.web.dto.validation.OnCreate;
import ar.com.country.restaurant.web.mappers.UserMapper;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.BearerTokenAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationProvider;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@Validated
public class LoginAndRegistrationController {
    private final UserService userService;
    private final UserMapper userMapper;
    private final TokenGenerator tokenGenerator;
    private final DaoAuthenticationProvider daoAuthenticationProvider;
    private final JwtAuthenticationProvider refreshTokenAuthProvider;

    public LoginAndRegistrationController(
            UserService userService,
            UserMapper userMapper,
            TokenGenerator tokenGenerator,
            DaoAuthenticationProvider daoAuthenticationProvider,
            @Qualifier("jwtRefreshTokenAuthProvider") JwtAuthenticationProvider refreshTokenAuthProvider
    ) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.tokenGenerator = tokenGenerator;
        this.daoAuthenticationProvider = daoAuthenticationProvider;
        this.refreshTokenAuthProvider = refreshTokenAuthProvider;
    }

    @Operation(summary = "Login a user", description = "Login a user and return a JWT token")
    @PostMapping("/login")
    public TokenDTO login(@RequestBody @Valid LoginDTO payload) {
        var token = UsernamePasswordAuthenticationToken.unauthenticated(payload.email(), payload.password());
        Authentication authentication = daoAuthenticationProvider.authenticate(token);
        return tokenGenerator.issueToken(authentication);
    }

    @Operation(summary = "Register a new user", description = "Register a new user and return a JWT token")
    @PostMapping("/register")
    @Validated(OnCreate.class)
    @ResponseStatus(HttpStatus.CREATED)
    public TokenDTO register(@RequestBody @Valid UserDTO userDto) {
        User newUser = userMapper.toEntity(userDto);
        User result = userService.createUser(newUser);
        SecurityUser securityUser = new SecurityUser(result);
        Authentication authentication = UsernamePasswordAuthenticationToken.authenticated(securityUser, userDto.password(), securityUser.getAuthorities());
        return tokenGenerator.issueToken(authentication);
    }

    @Operation(summary = "Refresh a JWT token")
    @PostMapping("/refresh-token")
    public TokenDTO refreshToken(@RequestBody TokenDTO payload) {
        Authentication authentication = refreshTokenAuthProvider.authenticate(new BearerTokenAuthenticationToken(payload.refreshToken()));
        Jwt jwt = (Jwt) authentication.getCredentials();
        String email = jwt.getSubject();
        userService.getUserByEmail(email);
        return tokenGenerator.issueToken(authentication);
    }

}
