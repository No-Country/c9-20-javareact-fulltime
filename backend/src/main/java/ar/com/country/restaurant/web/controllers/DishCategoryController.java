package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.hateoas.assemblers.DishCategoryModelAssembler;
import ar.com.country.restaurant.web.mappers.DishCategoryMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

import static ar.com.country.restaurant.util.ApiDocsConstants.*;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
@Tag(name = "Dish Categories", description = "API to manage dish categories")
@ApiResponses({
        @ApiResponse(ref = BAD_REQUEST_RESPONSE_REF, responseCode = "400"),
        @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
        @ApiResponse(ref = INTERNAL_SERVER_ERROR_RESPONSE_REF, responseCode = "500")
})
public class DishCategoryController {
    private final DishCategoryService dishCategoryService;
    private final DishCategoryMapper dishCategoryMapper;
    private final DishCategoryModelAssembler dishCategoryModelAssembler;

    @Operation(summary = "Returns all dish categories")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(array = @ArraySchema(schema = @Schema(implementation = DishCategoryDTO.class)))
    })
    @GetMapping
    public CollectionModel<DishCategoryDTO> getAllDishCategories() {
        List<DishCategory> dishCategories = dishCategoryService.getDishCategories();
        return dishCategoryModelAssembler.toCollectionModel(dishCategories);
    }

    @Operation(summary = "Returns a dish category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category found", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @GetMapping("/{categoryId}")
    public DishCategoryDTO getDishCategoryById(@PathVariable Long categoryId) {
        DishCategory dishCategory = dishCategoryService.getDishCategoryById(categoryId);
        return dishCategoryModelAssembler.toModel(dishCategory);
    }

    @Operation(summary = "Creates a new dish category")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "Dish category created", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403")
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<DishCategoryDTO> createDishCategory(@RequestBody @Valid DishCategoryDTO dishCategoryDto) {
        DishCategory dishCategory = dishCategoryMapper.toEntity(dishCategoryDto);
        DishCategory result = dishCategoryService.createDishCategory(dishCategory);
        DishCategoryDTO resultDto = dishCategoryModelAssembler.toModel(result);
        return ResponseEntity
                .created(URI.create(resultDto.getRequiredLink("self").getHref()))
                .body(resultDto);
    }

    @Operation(summary = "Updates a dish category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category updated", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403"),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @PutMapping("/{categoryId}")
    public DishCategoryDTO updateDishCategory(
            @PathVariable Long categoryId,
            @RequestBody @Valid DishCategoryDTO dishCategoryDto
    ) {
        DishCategory dishCategory = dishCategoryMapper.toEntity(dishCategoryDto);
        DishCategory result = dishCategoryService.updateDishCategory(categoryId, dishCategory);
        return dishCategoryModelAssembler.toModel(result);
    }

    @Operation(summary = "Deletes a dish category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category deleted", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403"),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @DeleteMapping("/{categoryId}")
    public DishCategoryDTO deleteDishCategoryById(@PathVariable Long categoryId) {
        DishCategory result = dishCategoryService.deleteDishCategory(categoryId);
        return dishCategoryMapper.toDto(result);
    }

}
