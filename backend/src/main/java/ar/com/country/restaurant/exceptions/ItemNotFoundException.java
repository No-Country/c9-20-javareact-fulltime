package ar.com.country.restaurant.exceptions;

public class ItemNotFoundException extends RuntimeException {

        public ItemNotFoundException(String message) {
            super(message);
        }
}
