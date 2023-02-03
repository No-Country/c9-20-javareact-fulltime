package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.User;

public interface UserService {

    User getUserByEmail(String username);

}
