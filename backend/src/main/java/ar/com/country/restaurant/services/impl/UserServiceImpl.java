package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.exceptions.EmailAlreadyTakenException;
import ar.com.country.restaurant.exceptions.UserNotFoundException;
import ar.com.country.restaurant.repositories.UserRepository;
import ar.com.country.restaurant.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User findById(Long id){
        return userRepository
                .findById(id).
                orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository
                .findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException(email));
    }

    @Override
    public User createUser(User user) {
        ensureUniqueEmail(user.getEmail());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        if (!existsById(user.getId())) {
            throw new UserNotFoundException();
        }
        ensureUniqueEmail(user.getEmail());
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }

    private void ensureUniqueEmail(String email) {
        boolean emailTaken = userRepository.existsByEmail(email);
        if (emailTaken) {
            throw new EmailAlreadyTakenException(email);
        }
    }
}
