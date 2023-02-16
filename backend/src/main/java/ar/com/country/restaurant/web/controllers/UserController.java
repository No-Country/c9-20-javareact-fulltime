package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.hateoas.assemblers.UserModelAssembler;
import ar.com.country.restaurant.services.UserService;
import ar.com.country.restaurant.web.dto.UserDTO;
import ar.com.country.restaurant.web.mappers.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;
    private final UserModelAssembler userModelAssembler;

    @GetMapping("/{userId}")
    public UserDTO getUserById(@PathVariable Long userId) {
        User result = userService.getUserById(userId);
        return userModelAssembler.toModel(result);
    }

    @PutMapping("/{userId}")
    public UserDTO updateUser(@PathVariable Long userId, @RequestBody @Valid UserDTO userDto) {
        User updatedUser = userMapper.toEntity(userDto);
        User result = userService.updateUser(userId, updatedUser);
        return userModelAssembler.toModel(result);
    }

    @DeleteMapping("/{userId}")
    public UserDTO deleteUser(@PathVariable Long userId) {
        User result = userService.deleteUser(userId);
        return userMapper.toDto(result);
    }

}
