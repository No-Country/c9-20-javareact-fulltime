package ar.com.country.restaurant.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.ConversionNotSupportedException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.BindException;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.context.request.async.AsyncRequestTimeoutException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Objects;

@Slf4j
@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class HttpExceptionHandler extends ResponseEntityExceptionHandler {
    @Override
    @NonNull
    protected ResponseEntity<Object> handleExceptionInternal(
            @NonNull Exception ex,
            @NonNull Object body,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleExceptionInternal() method called");
        return super.handleExceptionInternal(ex, body, headers, status, request);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleAsyncRequestTimeoutException(
            @NonNull AsyncRequestTimeoutException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest webRequest) {
        log.info("HttpExceptionHandler.handleAsyncRequestTimeoutException() method called");
        return Objects.requireNonNull(super.handleAsyncRequestTimeoutException(ex, headers, status, webRequest));
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleHttpMediaTypeNotAcceptable(
            @NonNull HttpMediaTypeNotAcceptableException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleHttpMediaTypeNotAcceptable() method called");
        return super.handleHttpMediaTypeNotAcceptable(ex, headers, status, request);
    }

    // Other methods
    @Override
    @NonNull
    protected ResponseEntity<Object> handleMissingPathVariable(
            @NonNull MissingPathVariableException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleMissingPathVariable() method called");
        return super.handleMissingPathVariable(ex, headers, status, request);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleMissingServletRequestParameter(
            @NonNull MissingServletRequestParameterException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleMissingServletRequestParameter() method called");
        return super.handleMissingServletRequestParameter(ex, headers, status, request);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleConversionNotSupported(
            @NonNull ConversionNotSupportedException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleConversionNotSupported() method called");
        return super.handleConversionNotSupported(ex, headers, status, request);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleNoHandlerFoundException(
            @NonNull NoHandlerFoundException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handlerNoHandlerFoundException() method called");
        return super.handleNoHandlerFoundException(ex, headers, status, request);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleBindException(
            @NonNull BindException ex,
            @NonNull HttpHeaders headers,
            @NonNull HttpStatus status,
            @NonNull WebRequest request) {
        log.info("HttpExceptionHandler.handleBindException() method called");
        return super.handleBindException(ex, headers, status, request);
    }





}
