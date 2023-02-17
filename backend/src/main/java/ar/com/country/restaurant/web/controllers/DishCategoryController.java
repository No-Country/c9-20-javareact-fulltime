package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.DishCategory;
import ar.com.country.restaurant.services.DishCategoryService;
import ar.com.country.restaurant.web.dto.DishCategoryDTO;
import ar.com.country.restaurant.web.mappers.DishCategoryMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static ar.com.country.restaurant.util.ApiDocsConstants.NOT_FOUND_RESPONSE_REF;

@RestController
@RequestMapping("/api/dish-categories")
@RequiredArgsConstructor
@Tag(name = "Dish Categories", description = "API to manage dish categories")
@ApiResponses({
        @ApiResponse(ref = "BAD_REQUEST_RESPONSE_REF", responseCode = "400"),
        @ApiResponse(ref = "UNAUTHORIZED_RESPONSE_REF", responseCode = "401"),
        @ApiResponse(ref = "INTERNAL_SERVER_ERROR_RESPONSE_REF", responseCode = "500")
})
public class DishCategoryController {

    private final DishCategoryService dishCategoryService;

    private final DishCategoryMapper dishCategoryMapper;

    @Operation(summary = "Returns all dish categories")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(array = @ArraySchema(schema = @Schema(implementation = DishCategoryDTO.class)))
    })
    @GetMapping("/")
    public List<DishCategory> getAllDishCategories() {
        return dishCategoryService.getAllDishCategories();
    }

    @Operation(summary = "Returns a dish category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category found", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @GetMapping("/{id}")
    public Optional<DishCategory> getDishCategoryById(@PathVariable Long id) {
        return dishCategoryService.findById(id);
    }

    @Operation(summary = "Creates a new dish category")
    @ApiResponse(responseCode = "201", description = "Created", content = {
            @Content(schema = @Schema(implementation = DishCategoryDTO.class))
    })
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public DishCategory createDishCategoryById(@RequestBody @Valid DishCategoryDTO dishCategoryDTO) {
        DishCategory newDishCategory = dishCategoryMapper.toEntity(dishCategoryDTO);
        return dishCategoryService.createDishCategory(newDishCategory);
    }

    @Operation(summary = "Updates a dish category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category updated", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @PutMapping("/{id}")
    public DishCategory updateDishCategory(@PathVariable Long id, @RequestBody DishCategory newDishCategory) {
        Optional<DishCategory> oldDishCategory = dishCategoryService.findById(id);
        newDishCategory.setId(oldDishCategory.get().getId());
        return dishCategoryService.createDishCategory(newDishCategory);
    }

    @Operation(summary = "Deletes a dish category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Dish category deleted", content = {
                    @Content(schema = @Schema(implementation = DishCategoryDTO.class))
            }),
            @ApiResponse(ref = NOT_FOUND_RESPONSE_REF, responseCode = "404")
    })
    @DeleteMapping("/{id}")
    public DishCategory deleteDishCategoryById(@PathVariable Long id) {
        return dishCategoryService.deleteDishCategory(id);
    }
}
