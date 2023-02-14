package ar.com.country.restaurant.exceptions;

import org.springframework.http.HttpStatus;

public class DishIdNotFoundException extends RuntimeException{
//    public IdNotFoundException(Long id) {
//        super(String.format("Dish with id: %s not found", id));
//    }

    private String message;
    private HttpStatus httpStatus;

    public DishIdNotFoundException(String message, HttpStatus httpStatus) {
        super(message);
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
