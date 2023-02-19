package ar.com.country.restaurant.dao.entities.spec;

import ar.com.country.restaurant.dao.entities.Dish;
import org.springframework.web.multipart.MultipartFile;

import static java.util.Objects.nonNull;

public record DishSpec(
        Dish dish,
        Long categoryId,
        MultipartFile image
) {

    public boolean imageProvided() {
        return nonNull(image) && !image.isEmpty();
    }

}
