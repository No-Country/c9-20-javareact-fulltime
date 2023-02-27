package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;

import java.util.List;

public interface CartService {

    Cart getCartOfLoggedUser(Long userId);

    List<ItemCart> getItemsFromCart(Long cartId);

    Cart addItem(Long userId, Long dishId, ItemCart itemCart);

    Cart deleteItem(Long userId, Long itemId);

}
