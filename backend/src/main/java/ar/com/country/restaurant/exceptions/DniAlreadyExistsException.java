package ar.com.country.restaurant.exceptions;

public class DniAlreadyExistsException extends RuntimeException {

    public DniAlreadyExistsException() {
        super("DNI already exists");
    }

}
