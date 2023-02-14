package ar.com.country.restaurant.exceptions;

import java.util.function.Supplier;

public class DishIdNotFoundException extends RuntimeException{
    public DishIdNotFoundException() {
        super(String.format("Dish not found"));
    }

}