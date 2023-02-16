package ar.com.country.restaurant.exceptions;

public class DishCategoryNotFoundException extends RuntimeException {

        public DishCategoryNotFoundException() {
            super("Dish Category not found");
        }
}
