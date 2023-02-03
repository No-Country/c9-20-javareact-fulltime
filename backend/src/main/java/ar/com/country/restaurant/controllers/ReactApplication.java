package ar.com.country.restaurant.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("http://localhost:3000")
public class ReactApplication {

  public static void main(String[] args) {
    // findById
    // findAll
    SpringApplication.run(ReactApplication.class, args);
  }

}