package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.User;

public interface UserService {

    User getUserByEmail(String username);

    User getUserById(Long id);

    User createUser(User user);

}
