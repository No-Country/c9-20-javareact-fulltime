package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.repositories.UserRepository;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@Validated
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody @Valid User user) {
        User userToUpdate = userRepository.findById(id).orElseThrow();
        updateMethod(user, userToUpdate);
        return userRepository.save(userToUpdate);
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id);
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
