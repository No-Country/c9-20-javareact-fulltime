package ar.com.country.restaurant.exceptions.handler;

import ar.com.country.restaurant.exceptions.EmailAlreadyTakenException;
import ar.com.country.restaurant.exceptions.UserNotFoundException;
import ar.com.country.restaurant.exceptions.response.ErrorResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE + 1)
public class ApplicationExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> badCredentialsHandler(final BadCredentialsException e) {
        return throwCustomException(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EmailAlreadyTakenException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<Object> emailAlreadyTakenHandler(final EmailAlreadyTakenException e) {
        return throwCustomException(e, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> userNotFoundHandler(final UserNotFoundException e) {
        return throwCustomException(e, HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<Object> throwCustomException(final RuntimeException e, final HttpStatus status) {
        return new ResponseEntity<>(new ErrorResponse(e, status), status);
    }

}
