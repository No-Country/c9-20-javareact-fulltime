package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.repositories.UserRepository;
import ar.com.country.restaurant.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User getUserByEmail(String email) {
        return userRepository
                .findByEmail(email)
                .orElseThrow();
    }

}
