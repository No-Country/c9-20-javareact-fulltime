package ar.com.country.restaurant.exceptions.handler;

import ar.com.country.restaurant.exceptions.*;
import ar.com.country.restaurant.exceptions.response.ErrorResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE + 1)
public class ApplicationExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> badCredentialsHandler(final BadCredentialsException e) {
        return throwCustomException(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EmailAlreadyTakenException.class)
    public ResponseEntity<Object> emailAlreadyTakenHandler(final EmailAlreadyTakenException e) {
        return throwCustomException(e, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Object> userNotFoundHandler(final UserNotFoundException e) {
        return throwCustomException(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(AddressNotFoundException.class)
    public ResponseEntity<Object> addressNotFoundHandler(final AddressNotFoundException e) {
        return throwCustomException(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PaymentMethodNotFoundException.class)
    public ResponseEntity<Object> paymentMethodNotFoundHandler(final PaymentMethodNotFoundException e) {
        return throwCustomException(e, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(CardNumberAlreadyExistsException.class)
    public ResponseEntity<Object> cardNumberAlreadyExistsHandler(final CardNumberAlreadyExistsException e) {
        return throwCustomException(e, HttpStatus.CONFLICT);
    }

    private ResponseEntity<Object> throwCustomException(final RuntimeException e, final HttpStatus status) {
        return new ResponseEntity<>(new ErrorResponse(e, status), status);
    }

}
