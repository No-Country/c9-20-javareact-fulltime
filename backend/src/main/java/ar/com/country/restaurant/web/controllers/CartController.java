package ar.com.country.restaurant.web.controllers;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.services.CartService;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartController {

    private final CartService cartService;

    private final DishService dishService;

    private final UserService userService;

    public CartController(CartService cartService, DishService dishService, UserService userService) {
        this.cartService = cartService;
        this.dishService = dishService;
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    public Cart getCartByUserId(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return user.getCart();
    }

    @GetMapping("/{userId}/items")
    public List<ItemCart> getItemsFromCart(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        Cart cart = user.getCart();
        return cartService.getItemsFromCart(cart.getId());
    }

    @PostMapping("/{userId}/items")
    public Cart addItemToCart(@PathVariable Long userId, @RequestBody ItemCart itemCart) {

        User user = userService.getUserById(userId);
        Dish dish = dishService.getDishById(itemCart.getDish().getId());
        Cart cart = user.getCart();

        ItemCart item = new ItemCart();
        item.setDish(dish);
        item.setQuantity(itemCart.getQuantity());

        cart = createOrUpdateCart(user, cart);
        cart.addItemCart(item);
        cart.calculateSubTotal();

        cartService.saveCart(cart);
        return cart;
    }

    @DeleteMapping("/{userId}/items/{itemId}")
    public Cart removeItemFromCart(@PathVariable Long userId, @PathVariable Long itemId) {
        User user = userService.getUserById(userId);
        Cart cart = user.getCart();
        ItemCart item = cart.getItems().stream().filter(i -> i.getId().equals(itemId)).findFirst().get();
        cart.removeItemCart(item);
        cart.calculateSubTotal();
        cartService.saveCart(cart);
        return cart;
    }

    private static Cart createOrUpdateCart(User user, Cart cart) {
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
            user.setCart(cart);
        }
        return cart;
    }

}
