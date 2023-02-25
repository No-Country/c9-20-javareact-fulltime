package ar.com.country.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

@Data
@EqualsAndHashCode(callSuper = true)
@Relation(itemRelation = "dish", collectionRelation = "dishes")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DishResponseDTO extends RepresentationModel<DishResponseDTO> {
    private final Long id;
    private final String name;
    private final String description;
    private final Double price;
    private final boolean hasPromotion;
    private final PromotionDTO promotion;
    private final DishCategoryDTO category;
}
