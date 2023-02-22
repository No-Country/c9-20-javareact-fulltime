package ar.com.country.restaurant.services;

import ar.com.country.restaurant.dao.entities.Cart;
import ar.com.country.restaurant.dao.entities.Dish;
import ar.com.country.restaurant.dao.entities.ItemCart;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartService {

    List<ItemCart> getItemsFromCart(Long cartId);

    Cart saveCart(Cart cart);

}
