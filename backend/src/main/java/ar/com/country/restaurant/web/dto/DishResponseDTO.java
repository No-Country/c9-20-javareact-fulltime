package ar.com.country.restaurant.web.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Data
@EqualsAndHashCode(callSuper = true)
@Relation(itemRelation = "dish", collectionRelation = "dishes")
public class DishResponseDTO extends RepresentationModel<DishResponseDTO> {
    private final Long id;
    private final String name;
    private final String description;
    private final String image;
    private final Double price;
    private final DishCategoryDTO category;
}
