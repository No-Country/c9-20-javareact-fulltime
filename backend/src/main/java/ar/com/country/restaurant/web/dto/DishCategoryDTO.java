package ar.com.country.restaurant.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode
@Relation(itemRelation = "dishCategory", collectionRelation = "dishCategories")
public final class DishCategoryDTO extends RepresentationModel<DishCategoryDTO> {
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        Long id;

        @NotBlank
        String imgUrl;

        @NotBlank
        String name;
}

