package ar.com.country.restaurant.services.impl;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.ItemCart;
import ar.com.country.restaurant.dao.entities.User;
import ar.com.country.restaurant.exceptions.ItemNotFoundException;
import ar.com.country.restaurant.exceptions.UserNotFoundException;
import ar.com.country.restaurant.repositories.CartRepository;
import ar.com.country.restaurant.services.CartService;
import ar.com.country.restaurant.services.DishService;
import ar.com.country.restaurant.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{


    private final CartRepository cartRepository;

    private final DishService dishService;

    private final UserService userService;

    @Override
    public Cart getCartOfLoggedUser(Long userId) {
        return cartRepository
                .findCartByUserId(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }


    @Override
    public List<ItemCart> getItemsFromCart(Long userId) {
        User user = userService.getUserById(userId);
        Cart cart = user.getCart();
        return cartRepository.findAllItemsFromCart(cart.getId());
    }

    @Override
    public Cart addItem(Long userId, Long dishId, ItemCart itemCart) {
        User user = userService.getUserById(userId);
        Cart cart = user.getCart();
        Dish dish = dishService.getDishById(dishId);

        itemCart.setDish(dish);
        itemCart.setCart(cart);
        cart.addItemCart(itemCart);
        cart.calculateSubTotal();
        return cartRepository.save(cart);
    }

    @Override
    public Cart deleteItem(Long userId, Long itemId) {
        User user = userService.getUserById(userId);
        Cart cart = user.getCart();

        if(itemExists(itemId)) {
            cart.removeItemCart(itemId);
            cart.calculateSubTotal();
        }
        return cartRepository.save(cart);
    }


    public boolean itemExists(Long itemId) {
        if(!cartRepository.existsById(itemId)) {
            throw new ItemNotFoundException("Item not found");
        }
        return false;
    }

}
