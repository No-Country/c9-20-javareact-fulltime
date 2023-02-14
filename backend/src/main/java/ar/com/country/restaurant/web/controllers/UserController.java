package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.services.UserService;
import ar.com.country.restaurant.web.dto.UserDTO;
import ar.com.country.restaurant.web.mappers.UserMapper;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@Validated
public class UserController {

    private final UserService userService;

    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/users/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        return userMapper.toDto(userService.findById(id));
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody @Valid User user) {
        User userToUpdate = userService.findById(id);
        updateMethod(user, userToUpdate);
        return userService.updateUser(userToUpdate);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        if(userService.existsById(id)) {
            userService.deleteUser(id);
        }
    }

    private static void updateMethod(User user, User userToUpdate) {
        userToUpdate.setName(user.getName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPhone(user.getPhone());
        userToUpdate.setAddress(user.getAddress());
        userToUpdate.setRole(user.getRole());
    }
}
