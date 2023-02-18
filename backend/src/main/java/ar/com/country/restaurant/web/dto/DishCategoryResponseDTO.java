package ar.com.country.restaurant.web.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@Relation(itemRelation = "category", collectionRelation = "categories")
public class DishCategoryResponseDTO extends RepresentationModel<DishCategoryResponseDTO> {
    private final Long id;
    private final String name;
    private final String description;
    private final String image;
    private final List<DishResponseDTO> dishes;
}
