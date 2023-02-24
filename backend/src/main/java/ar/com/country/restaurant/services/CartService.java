package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.ItemCart;

import java.util.List;

public interface CartService {

    Cart getCartOfLoggedUser(Long userId);

    Cart getCartById(Long userId, Long cartId);

    List<ItemCart> getItemsFromCart(Long cartId);

    Cart addItem(Long userId, ItemCart itemCart);

    Cart deleteItem(Long userId, Long itemId);

}
