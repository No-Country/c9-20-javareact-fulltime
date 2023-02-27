package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.services.CartService;
import ar.com.country.restaurant.web.dto.ItemCartDTO;
import ar.com.country.restaurant.web.mappers.ItemCartMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ar.com.country.restaurant.util.ApiDocsConstants.*;

@RestController
@RequestMapping("/carts")
@RequiredArgsConstructor
@Tag(name = "Carts", description = "API to manage carts")
@ApiResponses({
        @ApiResponse(ref = BAD_REQUEST_RESPONSE_REF, responseCode = "400"),
        @ApiResponse(ref = UNAUTHORIZED_RESPONSE_REF, responseCode = "401"),
        @ApiResponse(ref = INTERNAL_SERVER_ERROR_RESPONSE_REF, responseCode = "500")
})
public class CartController {

    private final CartService cartService;

    private final ItemCartMapper itemCartMapper;

    @Operation(summary = "Returns the cart of the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(schema = @Schema(implementation = Cart.class))
    })
    @GetMapping
    public Cart getCartOfLoggedUser(
            @AuthenticationPrincipal SecurityUser securityUser
    ) {
        Long userId = securityUser.getId();
        return cartService.getCartOfLoggedUser(userId);
    }

    @Operation(summary = "Returns the items of the cart of the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(schema = @Schema(implementation = ItemCart.class))
    })
    @GetMapping("/items")
    public List<ItemCart> getItemsFromCart(
            @AuthenticationPrincipal SecurityUser securityUser
    ) {
        Long userId = securityUser.getId();
        return cartService.getItemsFromCart(userId);
    }

    @Operation(summary = "Adds an item to the cart of the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(schema = @Schema(implementation = Cart.class))
    })
    @PostMapping("/items")
    public Cart addItemToCart(
            @RequestBody ItemCartDTO itemCart,
            @AuthenticationPrincipal SecurityUser securityUser
    ) {
        ItemCart item = itemCartMapper.toEntity(itemCart);
        Long userId = securityUser.getId();
        Dish dish = item.getDish();
        Long dishId = dish.getId();
        return cartService.addItem(userId, dishId, item);
    }

    @Operation(summary = "Removes an item from the cart of the logged user")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(schema = @Schema(implementation = Cart.class))
    })
    @DeleteMapping("/items/{itemId}")
    public Cart removeItemFromCart(
            @PathVariable Long itemId,
            @AuthenticationPrincipal SecurityUser securityUser
    ) {
        Long userId = securityUser.getId();
        return cartService.deleteItem(userId, itemId);
    }
}

