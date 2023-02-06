package ar.com.country.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("http://localhost:3000")
public class CountryRestaurantApplication {

    public static void main(String[] args) {
        SpringApplication.run(CountryRestaurantApplication.class, args);
    }

}
