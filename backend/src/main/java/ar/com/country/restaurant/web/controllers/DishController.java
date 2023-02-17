package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.criteria.DishFilterCriteria;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.web.dto.DishDTO;
import ar.com.country.restaurant.web.hateoas.assemblers.DishModelAssembler;
import ar.com.country.restaurant.web.mappers.DishMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.data.web.SortDefault;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

import static ar.com.country.restaurant.util.ApiDocsConstants.*;

@RestController
@RequestMapping("/api/dishes")
@RequiredArgsConstructor
@Tag(name = "Dishes", description = "API to manage dishes")
@ApiResponses({
        @ApiResponse(ref = BAD_REQUEST_RESPONSE_REF, responseCode = "400"),
        @ApiResponse(ref = INTERNAL_SERVER_ERROR_RESPONSE_REF, responseCode = "500")
})
public class DishController {
    private final DishService dishService;
    private final DishMapper dishMapper;
    private final DishModelAssembler dishModelAssembler;
    private final PagedResourcesAssembler<Dish> dishPagedResourcesAssembler;

    @Operation(summary = "Returns the dishes that matches with the given query. Fields to match are name and description")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(array = @ArraySchema(schema = @Schema(implementation = DishDTO.class)))
    })
    @GetMapping("/search")
    public PagedModel<DishDTO> searchDishesByNameAndDescription(
            @RequestParam String query,
            @PageableDefault Pageable pageable
    ) {
        Page<Dish> result = dishService.searchDishByNameAndDescription(query, pageable);
        return dishPagedResourcesAssembler.toModel(result, dishModelAssembler);
    }

    @Operation(summary = "Returns the restaurant dishes in a paginated form")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(array = @ArraySchema(schema = @Schema(implementation = DishDTO.class)))
    })
    @Parameter(
            name = "categoryId",
            description = "Returns the dishes with the specified category",
            schema = @Schema(type = "long")
    )
    @GetMapping
    public PagedModel<DishDTO> getDishes(
            @RequestParam(required = false) Long categoryId,
            @PageableDefault @SortDefault Pageable pageable
    ) {
        DishFilterCriteria filterCriteria = new DishFilterCriteria(categoryId, pageable);
        Page<Dish> result = dishService.getDishes(filterCriteria);
        return dishPagedResourcesAssembler.toModel(result, dishModelAssembler);
    }

    @Operation(summary = "Returns the dish associated with the given ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Dish found", content = {
                    @Content(schema = @Schema(implementation = DishDTO.class))
            }),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @GetMapping("/{dishId}")
    public DishDTO getDishById(@PathVariable Long dishId) {
        Dish result = dishService.getDishById(dishId);
        return dishModelAssembler.toModel(result);
    }

    @Operation(summary = "Creates a dish")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "Dish created", content = {
                    @Content(schema = @Schema(implementation = DishDTO.class))
            }),
            @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403"),
    })
    @PostMapping
    public ResponseEntity<DishDTO> createDish(@RequestBody @Valid DishDTO dishDto) {
        Dish newDish = dishMapper.toEntity(dishDto);
        Dish result = dishService.createDish(newDish);
        return ResponseEntity
                .created(URI.create("/api/dishes/" + result.getId()))
                .body(dishModelAssembler.toModel(result));
    }

    @Operation(summary = "Updates the dish with the given payload. All fields must be provided.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Dish updated", content = {
                    @Content(schema = @Schema(implementation = DishDTO.class))
            }),
            @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403"),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @PutMapping("/{dishId}")
    public DishDTO updateDish(
            @PathVariable Long dishId,
            @RequestBody @Valid DishDTO dishDto
    ) {
        Dish dish = dishMapper.toEntity(dishDto);
        Dish result = dishService.updateDish(dishId, dish);
        return dishModelAssembler.toModel(result);
    }

    @Operation(summary = "Deletes a dish with the given ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Dish deleted", content = {
                    @Content(schema = @Schema(implementation = DishDTO.class))
            }),
            @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
            @ApiResponse(ref = FORBIDDEN_RESPONSE_REF, responseCode = "403"),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @DeleteMapping("/{dishId}")
    public DishDTO deleteDishById(@PathVariable Long dishId) {
        Dish result = dishService.deleteById(dishId);
        return dishMapper.toDto(result);
    }

}
