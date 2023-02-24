package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.security.SecurityUser;
import ar.com.country.restaurant.services.CartService;
import ar.com.country.restaurant.web.dto.ItemCartDTO;
import ar.com.country.restaurant.web.mappers.ItemCartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    private final ItemCartMapper itemCartMapper;


    @GetMapping
    public Cart getCartOfLoggedUser(
            @AuthenticationPrincipal SecurityUser securityUser
    ) {
        Long userId = securityUser.getId();
        return cartService.getCartOfLoggedUser(userId);
    }


    @GetMapping("/{cartId}")
    public Cart getCartById(
            @AuthenticationPrincipal SecurityUser securityUser,
            @PathVariable Long cartId
    ) {
        Long userId = securityUser.getId();
        return cartService.getCartById(userId, cartId);
    }


    @GetMapping("/{userId}/items")
    public List<ItemCart> getItemsFromCart(@PathVariable Long userId) {
        return cartService.getItemsFromCart(userId);
    }

    @PostMapping("/{userId}/items")
    public Cart addItemToCart(@PathVariable Long userId, @RequestBody ItemCartDTO itemCart) {
        return cartService.addItem(userId, itemCartMapper.toEntity(itemCart));
    }

    @DeleteMapping("/{userId}/items/{itemId}")
    public Cart removeItemFromCart(@PathVariable Long userId, @PathVariable Long itemId) {
        return cartService.deleteItem(userId, itemId);
    }
}
