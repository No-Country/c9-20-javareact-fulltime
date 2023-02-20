package ar.com.country.restaurant.exceptions;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String email) {
        super(String.format("User with email: %s not found", email));
    }

}
