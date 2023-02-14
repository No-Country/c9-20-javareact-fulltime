package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.User;

public interface UserService {
    User findById(Long id);

    User createUser(User user);

    User updateUser(User user);

    void deleteUser(Long id);

    boolean existsById(Long id);

    User getUserByEmail(String username);

}
