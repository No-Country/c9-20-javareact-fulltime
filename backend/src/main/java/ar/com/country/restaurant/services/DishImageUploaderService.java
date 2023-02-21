package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.DishImage;
import org.springframework.web.multipart.MultipartFile;

public interface DishImageUploaderService {

    DishImage uploadDishImage(MultipartFile image);

    DishImage updateDishImage(String publicId, MultipartFile image);
    
}
